import React from "react";
import { useState } from "react";
import "./style.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import moment from 'moment';
import slugify from "slugify";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const LatestPost = ({ blog , loadingLatest,proping , ...props}) => {
  const [current, setCurrent] = useState(0);
  const length = blog.length;
  const history = useHistory()
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const innerText = (data) => {
    const div = document.createElement("div");
    div.innerHTML = data.content;
    return div.innerText;
  };
  return (
    <div className="latest-container mt-1">
      {
        !loadingLatest ? <div className="btn-latest latest-btn-left pointer">
        <AiOutlineArrowLeft onClick={prevSlide} size={25} />
      </div>: null
      }
      

      {loadingLatest ? <div className="latest-container-content fade-in">
          <Skeleton height={400}/>
      </div> :blog.map((data, index) => {
        if (index === current) {
          return (
            <div
              className={`latest-container-content fade-in`}
              key={Math.random()}
             
            >
              <img src={data.headingImg.url} alt={Math.random()}/>
              <div className=" d-flex flex-column justify-content-center align-items-start  latest-content">
                <div className="latest-title">Latest Published</div>
                <div className="text-wrap w-100 latest-blog-title" onClick={() => {
                  history.push(`/blog-content/${slugify(data.title)}/${data._id}`)
                }}>
                  {data.title}
                </div>
                <div className="text-wrap w-100 latest-blog-content">
                  {" "}
                  {innerText(data).length > 200
                    ? innerText(data).substring(0, 200) + "..."
                    : innerText(data)}
                </div>
                <div className="d-flex justify-content-start align-items-center mt-3">
                <div className="creator-latest  text-wrap text-truncate pointer">{data.creator.name}</div>
                    <div className="mx-2 ">in</div>
                    <div className="type-content-latest pointer" onClick={() => {
                        history.push(`/view-content/${slugify(data.category.category)}/${data.category._id}`)
                    }}>{data.category.category}</div>
                </div>
                <div className="blog-date-info">
                    {moment(new Date(data.createdAt)).format('LL')} <span className="circle">|</span>{" "}
                <span className="time-sched"> {moment(new Date(data.createdAt)).fromNow()}</span>
                 </div>
              </div>
            </div>
          );
        }
        return null;
      })}
   
      {
        !loadingLatest ?  <div className="btn-latest latest-btn-right pointer">
        <AiOutlineArrowRight onClick={nextSlide} size={25} />
      </div>: null
      }
    </div>
  );
};

export default LatestPost;
