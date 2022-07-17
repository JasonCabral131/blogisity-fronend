
import axios from 'axios';
import {useEffect, useState} from 'react'
import axiosInstance from './axios'
export default function useFetchingBlog ( page, url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blog, setBlogFetch] = useState([]);
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
      setBlogFetch(prev => {
        if (prev.length > 0) {
          return [
            ...prev,
            ...res.data.blog.map((data, index) => {
              return { ...data, active: false };
            }),
          ];
        } else {
          return [
            ...prev,
            ...res.data.blog.map((data, index) => {
              if (index === 0) {
                return { ...data, active: true };
              }
              return { ...data, active: false };
            }),
          ];
        }
       
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
  return {loading, error, blog, hasMore, setBlogFetch, setHasMore}
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