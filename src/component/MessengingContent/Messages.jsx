import React, { useRef } from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import Linkify from "react-linkify";
import moment from "moment";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useWindowSize } from "../../reusable/common";
import ReactPhotoGrid from "react-photo-grid"
const MessagesContainer = ({
  messenges,
  setMessenges,
  reciever,
  photos,
  setPhotos,
}) => {
  const { user } = useSelector((state) => state.auth);
  const chatContainer = useRef();
  const  size  = useWindowSize();
  const handlescrollBottom = () => {
    const scroll =
      chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };
  useEffect(() => {
    handlescrollBottom();
  }, [messenges]);
  const handleClear = (id) => {
    console.log(id);
    const newPhoto = photos.filter((phto) => phto.id !== id);
    setPhotos(newPhoto);
  };
  return (
    <>
      <div className="messages-chats-container" ref={chatContainer}>
        {messenges.map((data, index) => {
          if (data.messenges === null && data.photos.length < 0) {
            return null;
          }
          if (data.sender === user?._id) {
            return (
              <div className="message-chat-info right-container" key={index}>
                <div className="d-flex">
                  {data.messenges ? (
                    <div className="message-info">
                      <Linkify>{data.messenges} </Linkify>
                    </div>
                  ) : null}
                  {data.photos.length > 0 ? (
                     <ReactPhotoGrid
                    
                     data={data.photos.map(pt => {
                      return pt.url
                     })}
                 />
                  ) : null}
                  <div className="avatar-chat-right">
                    <div className="avatar-right-chat">
                      {user?.profile?.url ? (
                        <Avatar round src={user?.profile?.url} size={30} />
                      ) : (
                        <Avatar round name={user?.name} size={30} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <div className="date-chat-send">
                    {moment(data.createdAt).fromNow()}
                  </div>
                  {data?.loading ? (
                    <div className="circle-sending-indicator ms-1" />
                  ) : (
                    <div className="circle-send-indicator ms-1" />
                  )}
                </div>
              </div>
            );
          }
          return (
            <div className="message-chat-info left-container " key={index}>
              <div className="d-flex">
                <div className="avatar-chat-right">
                  <div className="avatar-left-chat">
                    {reciever?.profile?.url ? (
                      <Avatar round src={reciever?.profile?.url} size={30} />
                    ) : (
                      <Avatar round name={reciever?.name} size={30} />
                    )}
                  </div>
                </div>
                {data.messenges ? (
                  <div className="message-info">
                    <Linkify>{data.messenges} </Linkify>
                  </div>
                ) : null}
                {data.photos.length > 0 ? (
                <ReactPhotoGrid
                    
                data={data.photos.map(pt => {
                 return pt.url
                })}
            />
                ) : null}
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="circle-send-indicator me-1" />
                <div className="date-chat-send">
                  {moment(data.createdAt).fromNow()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {photos.length > 0 ? (
        <div className="photo-upload-container">
          {photos.map((photo) => {
            return (
              <div key={photo.id} className="photo-container-uploads">
                <img alt="to uplaod photos" src={photo.dataUrl} />
                <div
                  className="close-uploadImg-con pointer"
                  onClick={() => {
                    handleClear(photo.id);
                  }}
                >
                  <AiOutlineCloseCircle size={20} color="#fff" />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MessagesContainer;
