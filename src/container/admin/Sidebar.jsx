import React from 'react'
import AdminSidebar from '../../component/AdminSidebarCategory'
import {AdminNavs} from "./../../config/adminNav";
const Sidebar = () => {
  return (
    <div className='sidebar-container shadow'>
        <div className='sidebar-title d-flex justify-content-center align-items-center p-1'>
            Blogisity
        </div>
        <hr />
        <div className='w-100 p-2'>

        </div>
        <AdminSidebar nav={AdminNavs}/>
    </div>
  )
}

export default Sidebar