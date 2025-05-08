import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Abortcont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: Abortcont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIspending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("hi");
          } else {
            setIspending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => Abortcont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
