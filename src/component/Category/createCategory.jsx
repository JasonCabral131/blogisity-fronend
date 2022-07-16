import React, { useState } from 'react'
import {Modal, Button} from "react-bootstrap";

import { useDispatch } from 'react-redux';
import { createCategory } from './../../redux/actions';

const initialState = {
    category: "",
    description: "",
}
const CreateCategory = ({show, setShow, handleGetCategory}) => {
    const [category, setCategory] = useState(initialState);
    const handleClose = () => {
        setShow(false)
    }
    const dispatch = useDispatch();
    const onSubmit = async(e) => {
     try{
      e.preventDefault();
     await dispatch(createCategory(category))
      setCategory(initialState);
      setShow(false);
      handleGetCategory()
     }catch(e){

    }
  
    
     
      
    }   
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create Category</Modal.Title>
    </Modal.Header>
    
    <form onSubmit={onSubmit}>
    <Modal.Body>
     
            <div className='w-100 form-group'>
                <label>Category</label>
                <input 
                  value={category.category}
                  onChange={e => setCategory(prev => {
                    return {...prev, category: e.target.value}
                  })}
                className='form-control' name="category" placeholder='category' type={"search"}/>
            </div>
            <div className='w-100 form-group'>
                <label>Description</label>
                <textarea 
                  value={category.description}
                  onChange={e => setCategory(prev => {
                    return {...prev, description: e.target.value}
                  })}
                className='form-control' name="description" rows={5} placeholder="Category Description" />
            </div>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button type='submit' variant="primary" >
        Save
      </Button>
    
    </Modal.Footer>
    </form>

  </Modal>
  )
}

export default CreateCategory