import React from 'react'
import { useState } from 'react';
import CreateContent from './createContent';
import "./style.scss";
const CreateBlogContent = () => {
    const [create, setCreate] = useState(false);
    const sample = 'https://thumbs.dreamstime.com/b/old-man-20313005.jpg'
  return (
    <div className='container p-2 shadow mt-3 bg-white create-blog-container'>
          <div className='d-flex justfify-content-start align-items-center content-blog'>
                <img src={sample} alt="profile-user"/>
                <div 
                className='content-info'
                 onClick={e => setCreate(true)}>
                    What's on your mind, Jason
                 </div>
          </div>
          <CreateContent show={create}  setShow={setCreate} />
    </div>
  )
}

export default CreateBlogContent