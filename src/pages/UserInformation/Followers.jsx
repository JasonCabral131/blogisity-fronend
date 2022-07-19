import React from 'react'

const Followers = ({number = 0}) => {
  return (
    <div className='d-flex justify-content-start align-items-center'>
    <div>{number}</div>
   <div className='ms-1'>Followers</div> 
</div>
  )
}

export default Followers