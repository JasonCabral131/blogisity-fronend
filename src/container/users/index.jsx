import React, { useState, useEffect } from 'react'
import Footer from '../../component/Footer';
import Content from './Content';
import Navbar from './Navbar';
import "./style.css";
import axiosInstance from '../../config/axios';
const UserContainer = (props) => {
  const [categories, setCategory] = useState([]);

  const getCatgery = async() => {
    try {
      const res = await axiosInstance.get("/category/all-categories");
      if (res.status === 200) {
        setCategory(res.data.data );
      }
    } catch (e) {}
  }
  useEffect(() => {
    getCatgery();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='content-wrapper'>
        <Navbar {...props} categories={categories}/>
        <Content {...props} categories={categories}/>
        <Footer  {...props}/>
    </div>
  )
}

export default UserContainer