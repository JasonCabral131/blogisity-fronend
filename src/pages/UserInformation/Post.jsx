import React from 'react'

const Post = ({number = 0}) => {
  return (
    <div className='d-flex justify-content-start align-items-center'>
        <div>{number}</div>
       <div className='ms-1'>Post</div> 
    </div>
  )
}

export default Post