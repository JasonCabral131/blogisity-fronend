import React, { useState } from 'react'
import {Modal, Button} from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

const initialState = {
    category: "",
    description: "",
}
const CreateCategory = ({show, setShow}) => {
  const methods = useForm();


    const [category, setCategory] = useState(initialState);
    const handleClose = () => {
        setShow(false)
    }
    const onSubmit = (data) => {
        console.log(data)
    }   
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create Category</Modal.Title>
    </Modal.Header>
    <FormProvider  {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <Modal.Body>
     
            <div className='w-100 form-group'>
                <label>Category</label>
                <input  className='form-control' name="category" placeholder='category' type={"search"}/>
            </div>
            <div className='w-100 form-group'>
                <label>Description</label>
                <textarea className='form-control' name="description" rows={5} placeholder="Category Description" />
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
    </FormProvider>
  </Modal>
  )
}

export default CreateCategory