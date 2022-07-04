import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TableSearch from "../../component/TableSearch";
import TablePagination from "../../component/TablePagination";

import CreateCategory from "../../component/Category/createCategory";
import { getCategory } from "../../redux/actions";
const Category = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category);
  const [page, setPage] = useState(0);
  const [create, setCreate] = useState(false);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Name",
      selector: (row) => row.category,
      sortable: true
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true
    },
    {
      cell: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          <FaRegEye color="#34dfeb" size={18} className=" pointer" />

          <BsPencilSquare color="#fff200" size={18} className="mx-2 pointer" />

          <BsTrash color="#eb4034" size={18} className="pointer" />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      name: "Action",
    },
  ];

  const handleGetCategory = async() => {
    const res = await dispatch(getCategory(page, search));
    if(res.result){
      setTotalPages(res.totalPages)
    }
  };
  useEffect(() => {
    handleGetCategory();
     // eslint-disable-next-line
  }, [page]);
  
  useEffect(() => {
    handleGetCategory()
    // eslint-disable-next-line
  }, []);
  const handleSearch = () => {
   
    handleGetCategory();
    setPage(0);
  }
  console.log(categories);
  return (
    <div className="container mt-4">
      <div className="card shadow py-2 px-4">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="w-100 table-title">Blog Category</div>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center mx-2"
              onClick={(e) => {
                setCreate(true);
              }}
            >
              <AiOutlinePlusCircle size={20} />
              <span className="ms-1 fw-bold">Add Category</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center mt-2">
          <TableSearch  search={search} setSearch={setSearch} handleSearch={handleSearch}/>
          <div></div>
        </div>
        <DataTable
          columns={columns}
          data={categories}
          fixedHeader
          fixedHeaderScrollHeight="400px"
        />

        <TablePagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
      <CreateCategory show={create} setShow={setCreate} />
    </div>
  );
};

export default Category;
