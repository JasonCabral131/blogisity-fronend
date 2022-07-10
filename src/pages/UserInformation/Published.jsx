import React from "react";
import { useCallback } from "react";
import { useRef, useState } from "react";
import BlogBoxContent from "../../component/BlogBoxContent";

import LoaderBlog from "../../component/LoaderBlog";
import useFetchingBlog from "../../config/fetchingBlog";

const Published = () => {
  const [page, setPage] = useState(0);

  const observer = useRef();
  const {loading, blog, hasMore} = useFetchingBlog(page, `/user/published?page=${page}`);
  
  const triggerRef = useCallback(node => {

    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPageNumber => prevPageNumber + 1);
        console.log("visible now")
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

 
  return (
    <div className="w-100">
      <div className="content-blog-container">
        { 
        blog.map((data, index) => {
          if(blog.length  === (index + 1)){
          return    <div className="content-blog-provider" key={Math.random()} ref={triggerRef} >
              <BlogBoxContent data={data} />
          </div>
          }
          return <div className="content-blog-provider" key={Math.random()} >
               <BlogBoxContent data={data}/>
          </div>
        })
        }
        
      </div>
      {
        loading ?  <LoaderBlog /> : null
      }
     
    </div>
  );
};

export default Published;
