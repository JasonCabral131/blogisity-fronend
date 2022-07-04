import React from 'react'
import {Modal} from "react-bootstrap";
const CreateContent = ({show, setShow}) => {
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
     
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
     
      </Modal>
  )
}

export default CreateContent