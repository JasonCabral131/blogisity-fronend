import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import NavbarSearch from '../../component/NavbarSearch';
const Navbar = () => {
  
  return (
    <div className='navbar-admin-container shadow-bottom d-flex align-items-center p-2'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='d-flex justify-content-start align-items-center'>
               <AiOutlineMenu size={40} className="pointer"/>
              
            </div>
          </div>
          <div className='col-md-6'></div>
        </div>
    </div>
  )
}

export default Navbar