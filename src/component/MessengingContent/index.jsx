import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./../../config/axios";
import { Audio } from "react-loader-spinner";
import "./style.scss";
import RecieverHeading from "./RecieverHeading";
import MessagesContainer from "./Messages";
import SendMessages from "./SendMessages";
import {useSelector} from "react-redux";
const MessengingContent = ({ setHide, hide }) => {
  const { id } = useParams();
  const {user} = useSelector();
  const [loading, setLoading] = useState(false);
  const [reciever, setReciever] = useState(false);
  const [messenges, setMessenges] = useState([]);
  const [message, setMessage] = useState("");
  const [activeUser, setActiveUser] = useState(false);
  const handleGetUserChat = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/messenges/${id}`);
      setLoading(false);
      if (res.status === 200) {
        console.log(res.data);
        setReciever(res.data.user);
        setMessenges(res.data.messenges);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetUserChat();
  }, [id]);
  const handleSendMessage = async(e) => {
    e.preventDefault();
    try{
      setMessage(prev => {
        return [{...prev}, {
          sender: user?._id
        }]
      })
    }catch(e){
      return
    }
  }
  return (
    <div className="w-100 ">
      {loading ? (
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <Audio height="200" width="200" color="#54A8F6" ariaLabel="loading" />
          <h3 style={{ color: "#54A8F6" }} className="mt-2">
            Loading Content
          </h3>
        </div>
      ) : null}

      {!loading && reciever ? (
        <div className="w-100">
          <div className="row messenger-row ">
            <div className="col-md-8 border chat-content-container-information">
              <RecieverHeading reciever={reciever} setHide={setHide} hide={hide} activeUser={activeUser} setActiveUser={setActiveUser}/>
              <MessagesContainer messenges={messenges} setMessenges={setMessenges}/>
              <SendMessages message={message} setMessage={setMessage} handleSendMessage={handleSendMessage}/>
            </div>
            <div className="col-md-4 border chat-content-container-information mobile-hide-chat">
             
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MessengingContent;
