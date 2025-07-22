import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlog({ id: docSnap.id, ...docSnap.data() });
      } else {
        navigate("/");
      }

      setIsPending(false);
    };

    fetchBlog();
  }, [id, navigate]);

  const handleClick = async () => {
    await deleteDoc(doc(db, "blogs", id));
    navigate("/");
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
