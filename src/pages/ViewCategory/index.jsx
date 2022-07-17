import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/axios';
import "./style.scss";
const ViewCategory = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const {categoryId} = useParams();
  const handleGetCategoryBlog = async() => {
    try{
      setLoading(true)
      const res = await axiosInstance.get(`/category/get-category-blog-list?category=${categoryId}&page=${page}`)
      setLoading(false)
      if(res.status === 200){
        console.log(res.data);
        setBlogs(prev => {
          return [...prev, res.data.blogs]
        })
      }
    }catch(e){
      setLoading(false)
    }
  }
  useEffect(() => {
    setBlogs([]);
    handleGetCategoryBlog()
    // eslint-disable-next-line
  }, [categoryId])
  useEffect(() => {
    handleGetCategoryBlog()
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
        <div className='gallery-list-provider'>
            <div className='gallery-list-content-active-data'>

            </div>
            <div className='gallery-list-blog-content'>

           
            </div>
        </div>
    </div>
  )
}

export default ViewCategory