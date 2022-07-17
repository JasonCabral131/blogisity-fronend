import React , {useEffect, useState, useRef, useCallback} from "react";
import {  useHistory, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import ListBlogContent from "../../component/ListBlogView";
import useFetchingBlog from "../../config/fetchingBlog";
import { innerText } from "../../reusable";
import Avatar from "react-avatar";
import slugify from "slugify";
const ViewCategory = () => {
  const [page, setPage] = useState(0);
  const { categoryId } = useParams();
  const observer = useRef();
  const history = useHistory()
  const { loading, blog , hasMore, setBlogFetch , setHasMore} = useFetchingBlog(
    page,
    `/category/get-category-blog-list?category=${categoryId}&page=${page}`
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
    [loading, hasMore])
  useEffect(() => {
    setBlogFetch([]);
    setHasMore(true);
    setPage(0)
    // eslint-disable-next-line
  }, [categoryId]);


  const handleActiveBlog = (isToActive, index) => {
    if (isToActive) {
      setBlogFetch((prev) => {
        return prev.map((data, idx) => {
          if (idx === index) {
            return { ...data, active: true };
          } else {
            return { ...data, active: false };
          }
        });
      });
    }
  };

  return (
    <div className="container w-100 bg-white ">
      {loading && blog.length < 1 ? (
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="skeleton-category-loader">
            <Skeleton height={400} />
          </div>
        </div>
      ) : null}
      <div className="gallery-list-provider ">
        <div className="gallery-list-content-active-data">
            {
              blog.map((data ) => {
                  if(data.active){
                      return <>
                        <img alt={data.title} src={data.headingImg.url}/>
                        <div className="active-content-title pointer" onClick={(e) => {
           
            history.push(`/blog-content/${slugify(data.title)}/${data._id}`);
          }}>{data.title}</div>
                        <div className="active-content-inner"> {innerText(data.content).length > 200
                    ? innerText(data.content).substring(0, 350) + " ..."
                    : innerText(data.content)}</div>
                       <div className="w-100 d-flex justify-content-start align-items-center category-creator">
                       {data.creator.profile.url ? (
                            <Avatar src={data.creator.profile.url} round size={45} />
                          ) : (
                            <Avatar size={45} name={data.creator.name} round />
                          )}
                           <div className="creator-name-category">{data.creator.name}</div>
                                  <div>in</div>
                                  <div
                                    className="creator-name-category"
                                    onClick={() => {
                                      history.push(
                                        `/view-content/${slugify(data.category.category)}/${
                                          data.category._id
                                        }`
                                      );
                                    }}
                                  >
                                    {data.category.category}
                                  </div>
                       </div>
                      </>
                  }
                  return null
                
              })
            }
        </div>
        <div className="gallery-blog-content">
          {blog.map((data, index) => {
            if (blog.length === index + 1) {
              return (
                <div className="w-100" key={data._id} ref={triggerRef}>
                  <ListBlogContent data={data} index={index}  handleActiveBlog={handleActiveBlog}/>
                </div>
              );
            }
            return <div className="w-100" key={data._id} > 
                  <ListBlogContent data={data} index={index}  handleActiveBlog={handleActiveBlog}/>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
