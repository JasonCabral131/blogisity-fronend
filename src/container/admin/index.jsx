import React from 'react'
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';

import Sidebar from './Sidebar';
import "./style.scss";
function AdminContainer() {
  return (
    <div className='admin-body-container'>
        <Sidebar />
        <div className="admin-content-container w-100">
          <Navbar />
          <Content />
          <Footer />
        </div>
    </div>
  )
}

export default AdminContainer