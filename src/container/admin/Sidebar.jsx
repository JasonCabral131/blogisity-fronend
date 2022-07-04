import React from 'react'
import SidebarList from "./../../component/AdminSidebarCategory"
import {AdminNavs} from "./../../config/adminNav";
const Sidebar = (props) => {
  return (
    <div className='sidebar-container shadow'>
        <div className='sidebar-title d-flex justify-content-center align-items-center p-1'>
            Blogisity
        </div>
        <div className="link-container">
          {AdminNavs.map((nav, key) => {
            return <SidebarList key={key} {...nav} {...props}/>;
          })}
        </div>
      
    </div>
  )
}

export default Sidebar