import React from 'react'
import "./style.scss";
import SidebarList from './SidebarList';
const AdminSidebar = ({nav}) => {
  return (
    <div className='sidebar-content-container'>
        <div className='d-flex p-1 flex-column justify-content-start align-items-center'>
          {nav.map(data => {
            return <SidebarList data={data} key={Math.random()}/>
          })}
        </div>
    </div>
  )
}
export default AdminSidebar;