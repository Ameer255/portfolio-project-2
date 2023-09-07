import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);

    try {
      setLoading(true);
      const res = fetchData(endpoint);
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { loading, data, error };
};

export default useFetch;
