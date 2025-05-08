import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogsDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("db.json" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("db.json" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogsDetails;
