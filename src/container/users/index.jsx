import React, { useState, useEffect } from 'react'
import Footer from '../../component/Footer';
import Content from './Content';
import Navbar from './Navbar';
import "./style.css";
const UserContainer = (props) => {
  const [categories, setCategory] = useState([]);

  const getCatgery = async() => {
      try{

      }catch(e){
        
      }
  }
  useEffect(() => {
    getCatgery();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='content-wrapper'>
        <Navbar {...props} categories={[]}/>
        <Content {...props} categories={[]}/>
        <Footer  {...props}/>
    </div>
  )
}

export default UserContainer