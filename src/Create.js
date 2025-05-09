import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIspending] = useState("false");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch(process.env.PUBLIC_URL + "/db.json", {
      method: "Post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIspending(false);
      navigate("/");
    });
  };

  return (
    <div className="Create">
      <h2>add new blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending && <button>Add Blog</button>}
        {!isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
