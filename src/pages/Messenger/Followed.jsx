import React, { useState, useRef, useCallback } from "react";
import useFetching from "./../../config/fetchingBlog";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";

const Followed = ({setHide, size, hide}) => {
  const [page, setPages] = useState(0);
  const { blog, loading, hasMore } = useFetching(
    page,
    `/messenges/writer/followed-writer?page=${page}`
  );
  const triggerRef = useCallback((node) => {}, []);
  const history = useHistory();
  const UserContainerinfo = ({ data }) => {
    return (
      <div
        className="w-100 d-flex justify-content-start align-items-center p-1 pointer writer-chat-container-head"
        onClick={() => {
          history.push(`/blogisity-messenging/${data._id}`);
          if(size.width < 600){
            setHide(!hide)
          }
        }}
      >
        {data.profile.url ? (
          <Avatar size={30} round src={data.profile.url} />
        ) : (
          <Avatar round name={data.name} size={30} />
        )}
        <div className="ms-1 writer-name-chat text-wrap text-truncate w-100">
          {data.name}
        </div>
      </div>
    );
  };
  return (
    <div className="w-100 d-flex justify-content-start align-items-start flex-column">
      {blog.map((writer, index) => {
        if (index === blog.length) {
          return (
            <div className="w-100" ref={triggerRef} key={writer.following._id}>
              <UserContainerinfo data={writer.following} />
            </div>
          );
        }
        return (
          <div className="w-100" key={writer.following._id}>
            <UserContainerinfo data={writer.following} />
          </div>
        );
      })}
      {loading && <div className="w-100 text-center mt-1">loading...</div>}
    </div>
  );
};

export default Followed;
