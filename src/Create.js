import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    await addDoc(collection(db, "blogs"), {
      title,
      body,
      author,
    });

    setIsPending(false);
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
