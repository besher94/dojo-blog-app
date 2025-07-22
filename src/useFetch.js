import { useState, useEffect } from "react";
import { blogs as staticBlogs } from "./data";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(staticBlogs);
      setIspending(false);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  }, []);

  return { data, isPending, error };
};
export default useFetch;
