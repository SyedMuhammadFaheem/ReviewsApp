import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(uri) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(uri)
        const response = await axios.get(uri);
        console.log(response.data.data)
        setData(response.data.data);
        setLoading(false);
    } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getData();
  },[uri]);
  return {data, loading, error};
}

export default useFetch;
