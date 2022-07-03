import React from 'react'
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
const TableSearch = () => {
  return (

    <div className='table-search-container d-flex'>
        <AiOutlineSearch size={16} className="tbl-search-icons" />
        <input placeholder='Search' type={"search"} className="tbl-search-input" />
        <button className='tbl-btn-search ms-2'>
          <div className='d-flex justify-content-center align-items-center'>
            <AiOutlineSearch size={16} color="#306BEC" />
            <span className='ms-1'>Search</span>
          </div>
        </button>
    </div>
  )
}

export default TableSearch