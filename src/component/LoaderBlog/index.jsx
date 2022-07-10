import React from "react";
import "./../BlogBoxContent/style.scss";
import Skeleton from 'react-loading-skeleton'
const LoaderBlog = () => {
  const loop = [0, 2, 3];
  return (
    <>
      {loop.map((val) => {
        return (
          <div className="content-blog-info-container pointer mt-1" key={Math.random()}>
            <div className="content-blog-img">
             <Skeleton count={1} style={{width: 450, height: 200}} /> 
            </div>
            <div className="blog-info w-100">
              <div className="blog-title w-100">
                <Skeleton count={1} style={{ height: 30}} /> 
              </div>
              <div className="blog-content-description w-100 ">
              <Skeleton count={1} style={{ height: 50}} /> 
              </div>
              <div className="blog-owner-info w-100 d-flex justify-content-start mt-3 align-items-center text-align-center">
                <Skeleton count={1} style={{width: 40, height: 40}} circle={true}/> 
                <Skeleton count={1} style={{ height: 30}} /> 
              </div>
              <div className="blog-date-info">
                <Skeleton count={1} style={{ height: 30}} /> 
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LoaderBlog;
