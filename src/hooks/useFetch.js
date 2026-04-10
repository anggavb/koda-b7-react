import { useEffect, useState } from "react";

const useFetch = (url, method, body = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true);
        const data = await fetch(url)
        if (!data.ok) throw new Error("Failed to fetch data");
        const json =  await data.json();
        setData(json)
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, method, body]);

  return { data, isLoading, error };
};

export default useFetch;