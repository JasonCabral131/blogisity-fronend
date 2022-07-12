import React from "react";
import "./style.scss";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TablePagination = ({ page, setPage, totalPages}) => {


    const onNextPage = () => {
        if (page < totalPages) {
          setPage(page + 1);
        }
      };
      const onPrevPage = () => {
        if (page > 0) {
          setPage(page - 1);
        }
      };
  const PrevPage = () => {
    return (
        <div
          onClick={onPrevPage}
          className={`${
            page === 0
              ? "bg-gray-50 cursor-not-allowed "
              : "bg-blue-50"
          }  align-items-center justify-content-center text-center d-flex p-2 rounded`}
        >
          <MdKeyboardArrowLeft size={20} color="#ffffff"/>
        </div>
      );
  }
  const NextPage = () => {
    return (
        <div
          onClick={onNextPage}
          className={`${
            page + 1 === totalPages
              ? "bg-gray-50 cursor-not-allowed "
              : "bg-blue-50"
          }  align-items-center justify-content-center text-center d-flex p-2 rounded`}
        >
          <MdKeyboardArrowRight size={20} color="#ffffff"/>
        </div>
      );
  }
  const handlePageClick = (event) => {
    setPage(event.selected);
  };
  return (
    <div className="d-flex justify-content-end ">
      <ReactPaginate
        activeClassName="bg-gray-50 rounded py-1 text-white px-3 align-items-center justify-content-center text-center d-flex pointer active-page"
        breakLabel="..."
        forcePage={page}
        previousLabel={<PrevPage />}
        nextLabel={<NextPage />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        pageLinkClassName="align-items-center justify-content-center text-center d-flex pointer not-active"
        className="paginate-page"
      />
    </div>
  );
};

export default TablePagination;
