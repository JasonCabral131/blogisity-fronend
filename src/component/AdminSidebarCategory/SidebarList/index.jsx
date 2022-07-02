import React, { useState } from 'react'
import {IconContext} from "react-icons";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import { useHistory } from 'react-router-dom';
import AdminSidebar from '..';
const SidebarList = ({data}) => {
    const [dropdown, setDropdown] = useState(false);
    const history = useHistory();
    const handleDropdown = (e) =>{
        setDropdown(!dropdown)
    }
    const handleLink = (e) => {
        if(!data.children ){
            history.push(`/admin${data.path}`)
            return;
        }
        handleDropdown();
    }
    const iconsClassname = 'd-flex justify-self-end align-self-center'
  return (
    <>
    <div className='d-flex justify-content-between align-items-center w-100 p-1 pointer sidebar-link-container' >
        <div className='d-flex justify-content-start align-items-center w-100' onClick={handleLink}>
            <IconContext.Provider value={{size: 18}}>
                {data.icon}
            </IconContext.Provider>
            <div className='sidebar-link'>{data.name}</div>
        </div>
        {
            data.children && data.children.length > 0 ? 
           
                  dropdown ?   <IoIosArrowUp className={iconsClassname} size={17} onClick={handleDropdown}/>: 
                  <IoIosArrowDown size={17} onClick={handleDropdown} className={iconsClassname}/>
                    
          
            : null
        }
    </div>
    {
        dropdown ?  
        <AdminSidebar nav={data.children}/>
        : null
    }
    </>
  )
}

export default SidebarList;