import React from 'react';
import "./style.scss";
import CategoriesList from '../../component/Categorieslist';
import {Switch, Redirect, Route} from "react-router-dom";
import AllBlogs from '../../component/AllBlogs';
import BlogCategoryContent from '../../component/BlogCategory';
import { useHistory } from 'react-router-dom';
const Blogs = () => {
  const history = useHistory();
  return (
    <div className='container'>
      <div className='row'>
        <div className='user-content-provider col-md-2'>
            <div className='blog-container-user' onClick={() => {
              history.push("/admin/writer")
            }}>
              <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/14/e2/d4/66/an-old-man-with-his-cigarette.jpg" alt="user-infomation"/>
              <div className='text-wrap text-truncate user-info pointer'>Jason P. Cabral </div>
            </div>
            <CategoriesList />
        </div>
        <div className='col-md-8 user-blog-content-provider'>
            <div className='mt-5'/>
            <Switch>
              <Route  path={"/admin/blogs/view"} exact render={route =>{
                return <AllBlogs {...route}/>
              }}/>
                <Route  path={"/admin/blogs/view/:id"} exact render={route =>{
                return <BlogCategoryContent {...route}/>
              }}/>
              <Redirect to={"/admin/blogs/view"}/>
            </Switch>
     
        </div>
      
      </div>
    </div>
  )
}

export default Blogs