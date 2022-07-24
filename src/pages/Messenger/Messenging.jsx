import React from "react";

import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
const Messenging = ({ inboxes , hide, setHide}) => {
  const history = useHistory();
  return (
    <div
   
    className="d-flex text-wrap text-truncate justify-content-start align-items-start flex-column mt-1 messagae-inbox-content">
      {inboxes.map((data) => {
        return (
          <div
          onClick={() => {
            if(setHide){
              setHide(!hide)
            }
           
            history.push(`/blogisity-messenging/${data.key}`)
          }} 
            className="w-100 d-flex justify-content-start align-items-center ps-1 border-bottom pointer inbox-container-point"
            key={Math.random().toString()}
          >
            {data.profile ? (
              <Avatar src={data.profile} round size={30} />
            ) : (
              <Avatar name={data.sender} round size={30} />
            )}
            <div className="inbox-sender-container ms-2">
              <div className="inbox-sender">{data.sender}</div>
              <div className="w-100">
                {data.chats ? (
                  data.chats.message ? (
                    <div className="message-inbox">{data.chats.message}</div>
                  ) : (
                    <div className="message-inbox">
                      {data.chats.images.images > 1
                        ? "Sent a photos"
                        : "Sent a photo"}{" "}
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messenging;
