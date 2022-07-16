import React from 'react'
import { useState , useEffect} from 'react';
import DataTable from "react-data-table-component";
import TableSearch from "../../component/TableSearch";
import TablePagination from "../../component/TablePagination";
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';
const UnverfiedUser = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    }
  ];

  const handleGetUser = async() => {
   const res =  await dispatch(getUsers(page))
 
  }
  useEffect(() => {
    handleGetUser()
  
  }, [])
  
  const handleSearch = () => {

  }
  return (
    <div className="container mt-4">
      <div className="card shadow py-2 px-4">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="w-100 table-title">Verified User Category</div>
          <div className="w-100 d-flex justify-content-end align-items-center">
       
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center mt-2">
          <TableSearch
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <div></div>
        </div>
        <DataTable
          columns={columns}
          data={[]}
          fixedHeader
          fixedHeaderScrollHeight="400px"
        />

        <TablePagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
   
     
    </div>

  )
}

export default UnverfiedUser