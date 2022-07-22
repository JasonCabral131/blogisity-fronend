import React, { useEffect } from 'react'
import { useState } from 'react'
import LatestPost from '../LatestPost';
import axiosInstance from "./../../config/axios"
import {useDispatch, useSelector} from "react-redux";
import "./style.scss"
import { getLatestBlog } from '../../redux/actions/blog.actions';
const Home = (props) => {
  const {latestBlog} = useSelector(state => state.blog)
  const [loadingLatest, setLoadingLatest] = useState(false);
  const dispatch = useDispatch();
  const handleGetBlogs = async() => {
    try{
      
       setLoadingLatest(true)
        await dispatch(getLatestBlog())
        setLoadingLatest(false)
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
        <LatestPost blog={latestBlog} proping={props} loadingLatest={loadingLatest}/>
        <h1 className='w-100 mt-5 text-center most-popular'>Most Popular</h1>
    </div>
  )
}

export default Home