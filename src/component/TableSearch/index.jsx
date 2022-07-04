import React from 'react'
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
const TableSearch = ({search, setSearch, handleSearch, isTbl = true}) => {
  return (

    <div className='table-search-container d-flex'>
        <AiOutlineSearch size={16} className="tbl-search-icons" />
        <input placeholder='Search' type={"search"} className="tbl-search-input" value={search} onChange={e => {
          setSearch(e.target.value)
        }} />
        {
          isTbl ? 
             <button className='tbl-btn-search ms-2' onClick={() => {
          handleSearch()
        }}>
          <div className='d-flex justify-content-center align-items-center'>
            <AiOutlineSearch size={16} color="#306BEC" />
            <span className='ms-1'>Search</span>
          </div>
        </button>
          : null
        }
     
    </div>
  )
}

export default TableSearch