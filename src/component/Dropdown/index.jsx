import React, { useState } from 'react'
import "./style.scss"
const Dropdown = ({onPoint, headingView,children}) => {
    const [dropdown, setDropDown] = useState(false);
  return (
  
    <div className='dropdown-container'>
        <div onClick={() => setDropDown(!dropdown)}>{onPoint}</div>
       {
        dropdown ? <div className='dropdown-content shadow p-1'>
          <div className='content-dropdown-provider'>
          {children}
          </div>
          {
            headingView ? <a href={headingView.url} className='view-all-content w-100 pointer' >{headingView.msg}</a>: null
          }
          
        </div>: null
       }
        
    </div>
  
  )
}

export default Dropdown