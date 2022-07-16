import React from 'react'
import { useState } from 'react';
import "./style.scss";
const ViewCategory = () => {
  const [pages, setPages] = useState(0);
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