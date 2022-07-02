import React, { useState } from 'react'
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
function NavbarSearch() {
  const [searching, setSeaching] = useState(false);
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
  
      <button className={`btn-search p-2 `} onBlur={e => {
        setSeaching(false)
      }}>
      <div className='search-form'>
        <span className='icon-search2'><AiOutlineSearch size={16} /></span>
        <input value={val} type={"search"} placeholder='Search...' className='input-search' onChange={e => {
          setSeaching(true)
          setVal(e.target.value)
        }} 
        onFocus={e => {
          setSeaching(true)
        }}
        />
      </div>
      {searching && val.length > 0?
        <div className='search-result shadow'>
            loading
        </div>
      : null}
    </button>
  
  )
}

export default NavbarSearch