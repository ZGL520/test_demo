import { useState, useCallback } from 'react';
import axios from 'axios';
export default useRequest = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const request = useCallback(() => {
    setLoading(true);
    axios.get(url, params).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      setError(err);
      setLoading(false);
    })
  }, [url, params])
  return {
    data,
    loading,
    error,
    request
  }
}