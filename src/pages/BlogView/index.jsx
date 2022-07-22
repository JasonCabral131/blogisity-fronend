import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoadingBlogMain from "../../component/LoadingBlogMain";
import axiosInstance from "../../config/axios";
import Avatar from "react-avatar";
import parse from "html-react-parser";
import "./style.scss";
import noContent from "./../../assets/img/no-content.png";
import { useSelector } from "react-redux";
import Picker from "emoji-picker-react";
import { BsEmojiSunglasses } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import useFetchingBlog from "../../config/fetchingBlog";
import Skeleton from "react-loading-skeleton";
import slugify from "slugify";
const BlogView = () => {
  const [loadingMain, setLoading] = useState(true);
  const [blogContext, setBlog] = useState(null);
  const [page, setPage] = useState(0);
  const observer = useRef();
  const { id } = useParams();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const [emoji, setEmoji] = useState(false);
  const [comment, setComment] = useState("");
  const { loading, blog, hasMore, setBlogFetch } = useFetchingBlog(
    page,
    `/blog/blog-suggestion?page=${page}&category=${blogContext?.category?._id}&creator=${blogContext?.creator?._id}&blog_id=${blogContext?._id}`
  );

  const triggerRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleGetBlog = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/blog/view-blog-info-content/" + id);
      if (res.status === 200) {
        setBlog(res.data.blog);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetBlog();
    setBlogFetch([]);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    handleGetBlog();
    // eslint-disable-next-line
  }, []);
  const onEmojiClick = (event, emojiObject) => {
    setComment((prev) => {
      return (prev += emojiObject.emoji);
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setBlog(prev => {
        return {...prev, comments: [...prev.comments, {user, comment}]}
      })
      setComment("");
     const res =  await axiosInstance.post(`/blog/send-comment-blog/`, {
          comment,
          blog_id: id,
        })
        if(res.status === 200){
          await axiosInstance.put(`/notification/comment-user-blog/`, {
            message: " has add comment to your blog.",
            url: `/blog-content/${slugify(blogContext?.title)}/${blogContext?._id}`,
            reciever: blogContext.creator._id,
          })
        }
        return;
    }catch(e){
      console.log(e.response.status)
    }
  };
  const Suggetion = ({ data }) => {
    return (
      <div className="blog-suggetion-container mt-2">
        <div className="img-container-suggestion w-100">
          <img src={data.headingImg.url} alt="img-content" />
        </div>
        <div className="w-100">
          <div className="suggetion-title pointer text-wrap p-1" onClick={() => {
           history.push(`/blog-content/${slugify(data.title)}/${data._id}`)
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
          }} >
            {data.title}
          </div>
          <div className="d-flex justify-content-start align-items-center w-100 mt-2 ps-1 category-info-suggestion">
            {data.creator.profile.url ? (
              <Avatar src={data.creator.profile.url} round size={28} />
            ) : (
              <Avatar size={28} name={data.creator.name} round />
            )}
            <div className="creator-name-suggestion">{data.creator.name}</div>
            <div>in</div>
            <div className="creator-name-suggestion" onClick={() => {
                history.push(`/view-content/${slugify(data.category.category)}/${data.category._id}`)
            }}>{data.category.category}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-100 blog-view-container ">
      {loadingMain ? <LoadingBlogMain /> : null}
      {!loadingMain && blogContext ? (
        <div className="row">
          <div className="col-md-8">
            <div className="w-100 d-flex flex-column justify-content-start align-items-start mt-5">
              <div className="w-100 blog-title-content text-wrap ">
                {blogContext?.title}
              </div>
              <div className="w-100 creatry-content-blog text-wrap d-flex justify-content-start align-items-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  {blogContext?.creator?.profile?.url ? (
                    <Avatar
                      src={blogContext?.creator?.profile?.url}
                      size={40}
                      round={true}
                    />
                  ) : (
                    <Avatar
                      name={blogContext?.creator?.name}
                      size={40}
                      round={true}
                    />
                  )}
                  <div className="d-flex justify-content-start align-items-start flex-column">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="creator-blog-content ms-2 pointer">
                        {blogContext.creator.name}{" "}
                      </div>
                      <div className="ms-1">in</div>
                      <div className="creator-blog-content ms-1 pointer">
                        {blogContext.category.category}
                      </div>
                    </div>
                    <div className="publish-creator-blog ms-1">
                      <div>Published</div>
                      <div>{blogContext?.createPublished}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-5 blog-content-content text-wrap">
                {parse(blogContext.content)}
              </div>
              <hr />
              <div className="d-flex justify-content-start align-items-center comment-heading">
                {blogContext.comments.length}{" "}
                {blogContext.comments.length > 0 ? "Comments" : "Comment"}
              </div>
           
              <div className="d-flex justify-content-start align-items-start flex-column leave-comment-heading">
                <span className="p-1 d-block">Leave A Comment</span>
              </div>
              <div className="comment-now  w-100">
                {user ? (
                  <div className="d-flex justify-content-start align-items-center ps-2">
                    {" "}
                    {user.profile.url ? (
                      <Avatar size={40} src={user.profile.url} round />
                    ) : (
                      <Avatar name={user.name} round size={40} />
                    )}
                    {user.onboarding === 0 ? (
                      <div className="ps-2 text-danger">
                        Verified Your Account Now !!!
                      </div>
                    ) : (
                      <form className="comment-now-section d-flex justify-content-start align-items-center" onSubmit={handleSubmit}>
                        <div className="emoji-onclick px-2 pointer">
                          <div className="picker-container">
                            {emoji ? (
                              <Picker onEmojiClick={onEmojiClick} />
                            ) : null}
                          </div>

                          <BsEmojiSunglasses
                            className="bg-warning"
                            style={{ borderRadius: "100%" }}
                            size={25}
                            onClick={() => {
                              setEmoji(!emoji);
                            }}
                          />
                        </div>
                        <textarea
                          className="comment-text-area w-100 form-control"
                          required
                          value={comment}
                          onChange={(e) => {
                            setComment((prev) => {
                              return e.target.value;
                            });
                          }}
                        
                        />
                        {comment.trim().length > 0 ? (
                          <button
                            type="submit"
                            className="send-comment pointer"
                          >
                            <AiOutlineSend size={30} />
                          </button>
                        ) : null}
                      </form>
                    )}
                  </div>
                ) : (
                  <div className="d-flex justify-content-start align-items-center ps-2">
                  <Avatar name={"No user"} size={40} />
                  <div className="ps-2 text-danger">
                       Sign Up to Comment!!!
                      </div>
                  </div>
                )}
              </div>
              <div className="d-flex flex-column w-100 justify-content-start align-items-start">
                      {
                        blogContext.comments.map(com=> {
                          return <div className="w-100 d-flex justify-content-start align-items-center mt-2" key={Math.random()}>
                              {com.user.profile.url ? <Avatar size={40} src={com.user.profile.url} round/> : <Avatar size={40} round name={com?.user?.name}/>}
                              <div className="d-flex justify-content-start align-items-start flex-column ms-1 container-comment-blog-content">
                                <div class="creator-name-suggestion">{com?.user?.name}</div>
                                <div className="comment-of-user text-wrap " >{com.comment}</div>
                              </div>
                          </div>
                        })
                      }
              </div>
              <div className="w-100 my-5" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="mt-2">
              <div className="suggestion-txt">Suggestion</div>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start container-suggestion">
              {blog.map((data, index) => {
                if (blog.length === index + 1) {
                  return (
                    <div className="w-100" key={Math.random()} ref={triggerRef}>
                      <Suggetion data={data} />
                    </div>
                  );
                }
                return (
                  <div className="w-100" key={Math.random()}>
                    <Suggetion data={data} />
                  </div>
                );
              })}
              {loading ? (
                <div className="blog-suggetion-container mt-2">
                  <div className="img-container-suggestion w-100">
                    <Skeleton height={150} />
                  </div>
                  <div className="w-100">
                    <Skeleton height={40} />
                    <div className="w-100 mt-1" />
                    <Skeleton height={30} />
                  </div>
                </div>
              ) : null}
              {!loading && blog.length < 1 ? (
                <div className="w-100 d-flex justify-content-center align-items-center flex-column mt-1">
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                    
                    }}
                    src={noContent}
                    alt={Math.random()}
                  />
                  <h4>No Suggestion Found</h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      {!loadingMain && !blogContext ? (
        <div className="w-100 mt-5 d-flex justify-content-center align-items-center flex-column no-content">
          <img alt="no-content" src={noContent} style={{ height: "95%" }} />
          <h3>Blog Not Found</h3>
        </div>
      ) : null}
    </div>
  );
};

export default BlogView;
