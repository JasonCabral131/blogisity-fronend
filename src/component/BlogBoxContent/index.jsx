import React from "react";
import "./style.scss";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import {BsTrash} from "react-icons/bs";
import { useSelector , useDispatch} from "react-redux";
import moment from 'moment';
import { AiOutlineComment} from "react-icons/ai";
import Avatar from 'react-avatar';
import { deleteBlog } from "../../redux/actions/blog.actions";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
const BlogBoxContent = ({ data, setTriggerUpdate }) => {
  const [show, setShow] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const innerText = () => {
    const div = document.createElement("div");
    div.innerHTML = data.content;
    return div.innerText;
  }
  const handleDelete = async(id) => {
    const options = {
      title: 'Are you sure?',
      message: 'This post will no longer appear anywhere!',
      buttons: [
        {
          label: 'No',
          onClick: () => {}
        },
        {
          label: 'Yes',
          onClick: () =>    {
      
            dispatch(deleteBlog(id))
            setTriggerUpdate(Math.random())
          }
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "overlay-custom-class-name"
    };
    
    confirmAlert(options);
 
 
  }
  return (
    <>
    <div className="content-blog-info-container mt-1 shadow">
      <div className="w-100 d-flex innerContentBlog">
        <div className="content-blog-img">
          <img src={data.headingImg.url} alt="blog-box-img" />
        </div>
        <div className="blog-info">
          <div className="editing-content">
            <div className="editing-content-container">
              {user && show && data?.creator?._id === user?._id ? (
                <div className="p-2 shadow content-view-edit">
                  <div className="content-btn d-flex justify-content-start align-items-center text-primary pointer p-1" 
                  onClick={() => {
                    history.push(`/writer/update-user-blog/${data._id}`)
                  }}
                  >
                    <BiEdit /> <span className="ms-1">Update</span>
                  </div>
                  <div className="content-btn">
                  <div className="content-btn d-flex justify-content-start align-items-center text-danger pointer p-1" onClick={async() => handleDelete(data._id)}>
                    <BsTrash /> <span className="ms-1">Delete</span>
                  </div>
                  </div>
                </div>
              ) : null}
            {user && data?.creator?._id === user?._id ?  <HiOutlineDotsVertical onClick={() => setShow(!show)} /> : null }
             
            </div>
          </div>
          <div className="blog-title text-wrap" onClick={() => {
                  history.push(`/blog-content/${slugify(data.title)}/${data._id}`)
                }}>{data.title}</div>
          <div className="blog-content-description text-wrap">
            {innerText().length > 200 ? innerText().substring(0, 200)+ "..." :  innerText()}
          </div>
          <div className="blog-owner-info d-flex justify-content-start mt-3 align-items-center text-align-center">
            {
              data.creator.profile.url ?  
              <img
              alt="blog-content-img"
              src={data.creator.profile.url }
            />
              : <Avatar name={data.creator.name}  size={30} round={true}/>
            }
            
            <div className="creator ms-2 text-wrap text-truncate">{data.creator.name}</div>
            <div className="mx-2 ">in</div>
            <div className="type-content" onClick={() => {
                      history.push(`/view-content/${slugify(data.category.category)}/${data.category._id}`)
            }}>{data.category.category}</div>
          </div>
          <div className="blog-date-info">
          {moment(new Date(data.createdAt)).format('LL')} <span className="circle">|</span>{" "}
            <span className="time-sched"> {moment(new Date(data.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
      <div className="like-comment-content">
                  
                  <div className="d-flex w-100 justify-content-start align-items-center p-2" onClick={() => {
                         history.push(`/view-content/${slugify(data.category.category)}/${data.category._id}`)
                  }}>
                     <AiOutlineComment size={25} className="pointer" color="#306BEC"/>
                     <div className="ms-1 btn-hover-social-like">{data.comments.length} Comment</div>
                  </div>
      </div>
    </div>
    
    </>
  );
};

export default BlogBoxContent;
