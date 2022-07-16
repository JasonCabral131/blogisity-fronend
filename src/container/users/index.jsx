import React, { useState, useEffect, useRef } from 'react'
import Footer from '../../component/Footer';
import Content from './Content';
import Navbar from './Navbar';
import "./style.scss";
import axiosInstance from '../../config/axios';
import { AiOutlineArrowUp } from "react-icons/ai";
const UserContainer = (props) => {
  const [categories, setCategory] = useState([]);
  const toTopRef = useRef();
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (toTopRef) {
        if (toTopRef.current) {
          if (toTopRef.current.style) {
            toTopRef.current.style.display = "block";
          }
        }
      }
    } else {
      if (toTopRef) {
        if (toTopRef.current) {
          if (toTopRef.current.style) {
            toTopRef.current.style.display = "none";
          }
        }
      }
    }
  }
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
        <button
        className="button-top gradient__bg"
        onClick={topFunction}
        ref={toTopRef}
      >
        <AiOutlineArrowUp color='#212529' size={20} />
      </button>
        <Navbar {...props} categories={categories}/>
        <Content {...props} categories={categories}/>
        <Footer  {...props}/>
    </div>
  )
}

export default UserContainer