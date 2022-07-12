import Announcement from "../pages/Announcment";
import Blogs from "../pages/Blogs";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import UserInformation from "../pages/UserInformation";
import UnverfiedUser from "../pages/Users/UnverfiedUser";
import VerifiedUser from "../pages/Users/VerifiedUser";


export const adminRoute = [
    {
        path: "/category",
        exact: true,
        name: "Category",
        component: Category 
    },
    {
        path: '/blogs',
        name: "Blogs",
  
        component: Blogs 
    },
    {
        path: '/dashboard',
        name: "Dashboard",
        exact: true,
        component: Dashboard 
    },
    {
        path: '/announcement',
        name: "Announcement",
        exact: true,
        component: Announcement 
    },
    {
        path: '/writer',
        name: "Writer",
        component: UserInformation 
    },
    {
        path: '/verified-writers',
        name: "verified-writer",
        component: VerifiedUser 
    },
    {
        path: '/unverified-writers',
        name: "unverified-writer",
        component: UnverfiedUser 
    }
]