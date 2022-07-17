import React from "react";
import slugify from "slugify";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
const ListBlogContent = ({ data, index, handleActiveBlog }) => {
  const history = useHistory();
  return (
    <div
      className={`gallery-list-blog-content d-flex justify-content-start align-items-center ${
        data.active ? "active" : ""
      }`}
      onClick={() => {
        handleActiveBlog(true, index);
      }}
    >
      <div className="wrap-img-list-blog">
        <img alt={data._id} src={data.headingImg.url} />
      </div>
      <div className="w-50 d-flex flex-column justify-content-start align-items-start">
        <div
          className="gallery-blog-title text-wrap"
          onClick={(e) => {
            handleActiveBlog(false, index);
            history.push(`/blog-content/${slugify(data.title)}/${data._id}`);
          }}
        >
          {data.title}
        </div>
        <div className=" d-flex justify-content-start align-items-center w-100 mt-2 ps-1 category-info-suggestion text-wrap">
          {data.creator.profile.url ? (
            <Avatar src={data.creator.profile.url} round size={28} />
          ) : (
            <Avatar size={28} name={data.creator.name} round />
          )}
          <div className="creator-name-suggestion">{data.creator.name}</div>
          <div>in</div>
          <div
            className="creator-name-suggestion"
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
      </div>
    </div>
  );
};

export default ListBlogContent;
