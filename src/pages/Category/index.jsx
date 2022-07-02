import React, { useState } from 'react'

import DataTable from 'react-data-table-component';
import {BsPencilSquare, BsTrash} from "react-icons/bs";
import {FaRegEye} from "react-icons/fa";
import {useSelector} from "react-redux";
import {AiOutlinePlusCircle} from "react-icons/ai";
import TableSearch from '../../component/TableSearch';
import TablePagination from '../../component/TablePagination';
const Category = () => {
  const category = useSelector(state => state.category.categories);
  const [page, setPage] = useState(0);
  const columns = [
    {
        name: 'Name',
        selector: row => row.title,
    },
    {
        name: 'Description',
        selector: row => row.year,
    },
    {
				
        cell: (row) => <div className='d-flex justify-content-center align-items-center'>
          <BsPencilSquare color='#34dfeb' size={15} className="pointer"/>
          <FaRegEye color='#34dfeb'  size={15}  className="mx-2 pointer"/>
          <BsTrash color='#eb4034' size={15}  className="pointer"/>
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        name: 'Action',
    },
];

console.log(category)
  return (
    <div className='container mt-4'>
      <div className='card shadow p-2'>
      <div className='d-flex justify-content-between align-items-center mt-2'>
        <div className='w-100 table-title'>
          Blog Category
        </div>
        <div className='w-100 d-flex justify-content-end align-items-center'>
            <TableSearch />
            <button className='btn btn-primary d-flex justify-content-center align-items-center mx-2'>
            <AiOutlinePlusCircle />
            
            </button> 
        </div>
      </div>
      <DataTable
                columns={columns}
                data={category}
                fixedHeader
                fixedHeaderScrollHeight="400px"
        />
       
          <TablePagination page={page} setPage={setPage} totalPage={0}/>
    
      </div>
    
    </div>
  )
}

export default Category