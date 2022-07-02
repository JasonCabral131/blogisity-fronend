import React from 'react'
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
const TableSearch = () => {
  return (
    <div className='table-search-container'>
        <AiOutlineSearch size={16} className="tbl-search-icons"/>
        <input placeholder='Search' type={"search"} className="tbl-search-input" />
    </div>
  )
}

export default TableSearch