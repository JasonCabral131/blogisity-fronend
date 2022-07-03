
import {MdOutlineDashboard} from "react-icons/md";
import {FaUsers, FaUserSlash} from 'react-icons/fa';
import {FiUserCheck} from "react-icons/fi";
import {AiOutlineNotification} from "react-icons/ai";
import {MdOutlineCategory} from "react-icons/md";
import { GrInfo} from "react-icons/gr";
import {RiUserSettingsLine}  from "react-icons/ri";

export const AdminNavs = [
    {
        path: "/dashboard",
        icon: <MdOutlineDashboard size={18} color="#caccca"/>,
        name: "Dashboard",
    },
    {
        path: "/announcement",
        icon: <AiOutlineNotification size={18} color="#caccca"/>,
        name: "Announcement"
    },
    {
        path: "/writers",
        icon:<FaUsers size={18} color="#caccca"/>,
        name: "Writers",
        children: [
            { 
                path: "/verified-writers",
                icon:<FiUserCheck size={18} color="#caccca"/>,
                name: "Verfied Writers",
            },
            { 
                path: "/unverified-writers",
                icon:<FaUserSlash size={18} color="#caccca"/>,
                name: "Verfied Writers",
            }

        ],
    },
    {
        path: "/blogs",
        icon: <GrInfo size={18} color="#caccca"/>,
        name: "Blogs"
    },
    {
        path: "/category",
        icon: <MdOutlineCategory size={18} color="#caccca"/>,
        name: "Blog Category"
    },
  
    {
        path: "/user-setting",
        icon: <RiUserSettingsLine size={18} color="#caccca"/>,
        name: "Settings"
    }
]
