import React, { useEffect } from 'react'
import { useState } from 'react'
import LatestPost from '../LatestPost';
import axiosInstance from "./../../config/axios"
import "./style.scss"
const Home = (props) => {
  const [blogs, setBlogs] = useState([]); 
  const [loadingLatest, setLoadingLatest] = useState(false);
  const handleGetBlogs = async() => {
    try{
      setLoadingLatest(true)
      const res = await axiosInstance.get("/blog/latest");
      setLoadingLatest(false)
      if(res.status === 200){
        setBlogs(res.data.blog);
      }
    }catch(e){
      setLoadingLatest(false)
    }
  }
  useEffect(() => {
    handleGetBlogs();
    // eslint-disable-next-line 
  }, []);

  return (
    <div className='w-100  p-0 home-content' >
        <LatestPost blog={blogs} proping={props} loadingLatest={loadingLatest}/>
        <h1 className='w-100 mt-5 text-center most-popular'>Most Popular</h1>
    </div>
  )
}

export default Home