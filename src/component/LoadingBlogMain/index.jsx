import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "./style.scss";
const LoadingBlogMain = () => {
  return (
    <div className='w-100 d-flex flex-column justify-content-start align-items-start '>
            <div className='loading-blog-title text-wrap '>
                <Skeleton height={50}/>
              
            </div>
            <div className='loading-blog-creator'>
                 <Skeleton height={30}/>
            </div>
            <div className='loading-blog-content'>
            <Skeleton height={400}/>
            </div>
            <div className='loading-blog-content mt-3'>
            <Skeleton height={150}/>
</div>
    </div>
  )
}

export default LoadingBlogMain