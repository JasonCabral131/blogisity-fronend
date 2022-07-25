import React, { useState, useRef, useCallback } from "react";
import useFetching from "./../../config/fetchingBlog";
import UserContainerinfo from "./UserContainerinfo";
const Followed = ({setHide, size, hide}) => {
  const [page, setPages] = useState(0);
  const { blog, loading, hasMore } = useFetching(
    page,
    `/messenges/writer/followed-writer?page=${page}`
  );
  const triggerRef = useCallback((node) => {}, []);

 
  return (
    <div className="w-100 d-flex justify-content-start align-items-start flex-column messagae-inbox-content">
      {blog.map((writer, index) => {
        if (index === blog.length) {
          return (
            <div className="w-100" ref={triggerRef} key={writer.following._id}>
              <UserContainerinfo data={writer.following} size={size} hide={hide} setHide={setHide}/>
            </div>
          );
        }
        return (
          <div className="w-100" key={writer.following._id}>
            <UserContainerinfo data={writer.following} size={size} hide={hide} setHide={setHide} />
          </div>
        );
      })}

      {!loading && blog.length < 1 ? <div className="w-100 text-center text-wrap mt-4 p-1" >Followed Some Writer For Latest Post and Update</div> : null }
      {loading && <div className="w-100 text-center mt-1">loading...</div>}
    </div>
  );
};

export default Followed;
