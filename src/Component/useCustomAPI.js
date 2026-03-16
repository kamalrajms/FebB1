import axios from "axios";
import { useState, useEffect } from "react";

function useCustomAPI(url) {
  const [data, setData] = useState([]);
  const [error, seterror] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const rsoponse = await axios.get(url);
        setData(rsoponse.data);
        if (!rsoponse.data) {
          throw new Error("error");
        }
      } catch (error) {
        seterror(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);
  return { data, error, isLoading };
}
export default useCustomAPI;
