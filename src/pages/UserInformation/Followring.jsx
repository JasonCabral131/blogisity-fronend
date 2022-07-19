import React from 'react'

const Followring = ({number = 0}) => {
  return (
<div className='d-flex justify-content-start align-items-center'>
        <div>{number}</div>
       <div className='ms-1'>Following</div> 
    </div>
  )
}

export default Followring