import React from 'react'
import "./style.scss";

const AllBlogs = (props) => {
  console.log(props)
  return (
    <div className='container'>
        <div className='editor-pick-container '>
            <div className='editor-active-container'>
                active
            </div>
            <div className=''>
              list
            </div>
        </div>
    </div>
  )
}

export default AllBlogs