import React from 'react';

import {useSelector} from "react-redux";
import BlogBoxContent from '../../component/BlogBoxContent';
import CreateBlogContent from '../../component/CreateBlogContent';
const Blogs = () => {
  const {categories} = useSelector(state => state.category);
  return (
    <div className='container'>
      <div className='row'>
        <div className='user-content-provider col-md-3'>

        </div>
        <div className='col-md-6 user-blog-content-provider'>
            <CreateBlogContent />
            <div className='mt-5'/>
           <BlogBoxContent />
        </div>
        <div className='col-md-6 list-writer-friend'>

        </div>
      </div>
    </div>
  )
}

export default Blogs