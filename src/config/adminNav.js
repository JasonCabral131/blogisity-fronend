
import {MdOutlineDashboard} from "react-icons/md";
import {FaUsers, FaUserSlash} from 'react-icons/fa';
import {FiUserCheck} from "react-icons/fi";
import {MdOutlineCategory} from "react-icons/md";
import {GrAnnounce, GrUserSettings} from "react-icons/gr";
import {SiBloglovin} from "react-icons/si";
export const AdminNavs = [
    {
        path: "/dashboard",
        icon: <MdOutlineDashboard size={15}/>,
        name: "Dashboard",
    },
    {
        path: "/announcement",
        icon: <GrAnnounce size={15}/>,
        name: "Announcement"
    },
    {
        path: "/writers",
        icon:<FaUsers size={15}/>,
        name: "Writers",
        children: [
            { 
                path: "/verified-writers",
                icon:<FiUserCheck size={15}/>,
                name: "Verfied Writers",
            },
            { 
                path: "/unverified-writers",
                icon:<FaUserSlash size={15}/>,
                name: "Verfied Writers",
            }

        ],
    },
    {
        path: "/blogs",
        icon: <SiBloglovin size={15}/>,
        name: "Blogs"
    },
    {
        path: "/category",
        icon: <MdOutlineCategory size={15}/>,
        name: "Blog Category"
    },
  
    {
        path: "/user-setting",
        icon: <GrUserSettings size={15}/>,
        name: "Settings"
    }
]
