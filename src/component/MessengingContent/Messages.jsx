import React, {useRef} from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import Linkify from 'react-linkify';
import moment from "moment";
import { useEffect } from "react";
const MessagesContainer = ({ messenges, setMessenges, reciever, photos, setPhotos }) => {
  const { user } = useSelector((state) => state.auth);
  const chatContainer = useRef();
  const handlescrollBottom = () => {
    const scroll =
      chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };
  useEffect(() => {
    handlescrollBottom();
  }, [messenges])
  return (
    <div className="messages-chats-container" ref={chatContainer}>
      {messenges.map((data) => {
        if (data.messenges === null && data.photos.length < 0) {
          return null;
        }
        if (data.sender === user?._id) {
          return (
            <div className="message-chat-info right-container" key={data._id}>
              <div className="d-flex">
                <div className="message-info"><Linkify>{data.messenges} </Linkify></div>
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
                {
                  data?.loading ? <div  className="circle-sending-indicator ms-1"/> : <div className="circle-send-indicator ms-1" />
                }
              </div>
            </div>
          );
        }
        return (
          <div className="message-chat-info left-container " key={data._id}>
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
              <div className="message-info">{data.messenges}</div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
            <div className="circle-send-indicator me-1" />
                <div className="date-chat-send">{moment(data.createdAt).fromNow()}</div>
                
              </div>
          </div>
        );
      })}
      {
        photos.length > 0 ? <div className="photo-upload-container">

        </div> : null
      }
      
    </div>
  );
};

export default MessagesContainer;
