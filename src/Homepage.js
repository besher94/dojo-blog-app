import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Homepage = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(process.env.PUBLIC_URL + "/db.json");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs:" />}
    </div>
  );
};

export default Homepage;
