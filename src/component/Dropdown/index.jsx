import React, { useState } from 'react'
import "./style.scss"
const Dropdown = ({onPoint,children}) => {
    const [dropdown, setDropDown] = useState(false);
  return (
  
    <div className='dropdown-container'>
        <div onClick={() => setDropDown(!dropdown)}>{onPoint}</div>
       {
        dropdown ? <div className='dropdown-content shadow p-1'>
        {children}
    </div>: null
       }
        
    </div>
  
  )
}

export default Dropdown