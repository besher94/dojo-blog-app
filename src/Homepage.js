import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import { db } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
      setIsPending(false);
    });

    return () => unsub(); // cleanup
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
