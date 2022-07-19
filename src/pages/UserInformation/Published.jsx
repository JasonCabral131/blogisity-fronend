import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef, useState } from "react";
import BlogBoxContent from "../../component/BlogBoxContent";

import LoaderBlog from "../../component/LoaderBlog";
import useFetchingBlog from "../../config/fetchingBlog";
import noContent from "./../../assets/img/no-content.png"
const Published = ({urlPublished}) => {
  const [page, setPage] = useState(0);
  const [triggerUpdate, setTriggerUpdate] = useState(0);
  const observer = useRef();
  const {loading, blog, hasMore, setBlogFetch} = useFetchingBlog(page, `${urlPublished}?page=${page}&triggerUpdate=${triggerUpdate}`);
  
  const triggerRef = useCallback(node => {

    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPageNumber => prevPageNumber + 1);
   
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

 useEffect(() => {
  setBlogFetch([])
 }, [triggerUpdate])
  return (
    <div className="w-100">
      <div className="content-blog-container">
       
        { 
        blog.map((data, index) => {
          if(blog.length  === (index + 1)){
          return    <div className="content-blog-provider " key={Math.random()} ref={triggerRef} >
              <BlogBoxContent data={data} setTriggerUpdate={setTriggerUpdate}/>
          </div>
          }
          return <div className="content-blog-provider" key={Math.random()} >
               <BlogBoxContent data={data} setTriggerUpdate={setTriggerUpdate}/>
          </div>
        })
        }
        
      </div>
      {
        loading ?  <LoaderBlog /> : null
      }
       {
        (!loading &&  blog.length < 1) ? <div className="w-100 mt-5 d-flex justify-content-center align-items-center flex-column">
              <img src={noContent} alt={"no post"} style={{width: '80%', height: '350px'}}/>
              <h1>No Posted</h1>
          </div>:null
        }
     
    </div>
  );
};

export default Published;
