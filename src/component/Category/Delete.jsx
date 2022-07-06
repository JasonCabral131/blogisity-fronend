import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteCategory, getCategory } from '../../redux/actions';
const Delete = ({id, show, setShow,setPage, setTotalPages, search, page}) => {
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const [loading, setLoading] = useState(false);
    const handleDelete = async() =>{
            setLoading(true);
            await dispatch(deleteCategory(id));
            const res = await dispatch(getCategory(0, search));
            if (res.result) {
              setTotalPages(res.totalPages);
                if(res.totalPages !== page){
                    setPage(0)
                }
            }
            setLoading(false)
            setShow(false)
    }
  return (
    <Modal show={show} onHide={handleClose} animation={false} centered size="md">

    <Modal.Body >
        <div className='p-3'>
        <h3 className='text-center'>Are you want to delete?</h3>
        <div className='d-flex justify-content-end align-items-center mt-3'>
            <button className='btn btn-secondary '  onClick={handleClose} >Cancel</button>
            <button className='btn btn-danger ms-1 ' onClick={handleDelete}>
              {
loading ? 
<div className='d-flex justify-content-center align-items-center'>
<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</div>
: 'Delete'
              }
                
            </button>
        </div>
        </div>
    </Modal.Body>

  </Modal>

  )
}

export default Delete