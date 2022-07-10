
import axios from 'axios';
import {useEffect, useState} from 'react'
import axiosInstance from './axios'
export default function useFetchingBlog ( page, url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blog, setBlog] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axiosInstance({
      url,
      method: 'GET',
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then(res => {
      setBlog(prev => {
        return [...prev, ...res.data.blog]
      })
      setHasMore( res.data.totalPages > page)
      setLoading(false)
    }).catch(e => {
      if(axios.isCancel(e)) return;
      setError(true);
      setLoading(false);
    });
    return cancel;
  }, [page, url])
  return {loading, error, blog, hasMore}
}

export const getDataUrl = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      baseURL = reader.result;

      resolve(baseURL);
    };
  });
};