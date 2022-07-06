import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import NavbarSearch from '../../component/NavbarSearch';
const Navbar = () => {
  
  return (
    <div className='navbar-admin-container shadow-bottom d-flex align-items-center p-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className=' d-flex align-items-center'>
            <div>
            <AiOutlineMenu size={20} className="pointer ms-1"/>
            </div>
              <div>
                <NavbarSearch />
              </div>
          </div>
          <div className='d-flex'></div>
        </div>
    </div>
  )
}

export default Navbar