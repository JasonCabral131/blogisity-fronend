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
import shortid from "shortid";
import useSound from 'use-sound';
import newMssgMP3 from "./../../assets/ringtune/messenger.mp3"
const MessengingContent = ({ setHide, hide }) => {
  const { id } = useParams();
  const [play] = useSound(newMssgMP3);
  const {user} = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const [reciever, setReciever] = useState(null);
  const [messenges, setMessenges] = useState([]);
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);
  const {socket} = useSelector(state => state.socket);
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
    setMessage([]);
  }, [id]);
  const handleSendMessage = async(e) => {
    e.preventDefault();

    try{
      if(message.length > 0  || photos.length > 0){
     
        const genId = shortid.generate();
        if(message.length > 0 ){
          if(message.trim().length > 0){
            setMessenges(prev => {
              return [...prev, {
                sender: user?._id,
                messenges: message,
                photos: [],
                reciever: id,
                loading: true,
                genId,
                _id: genId
              }]
            }) 
          }
        }
      
        if(photos.length > 0){
          setMessenges(prev => {
            return [...prev, {
              sender: user?._id,
              messenges: null,
              photos:photos.map(photo => {
                return {url: photo.dataUrl}
              }),
              reciever: id,
              loading: true,
              genId,
              _id: genId
            }]
          }) 
        }
        const form = new FormData();
        form.append("messenges", message.length > 0 ? message.trim().length > 0 ?  message: null : null );
        form.append("reciever", id);
        for(let photo of photos){
          form.append("files", photo.file);
        }
        setMessage("");
        setPhotos([])
        const res = await axiosInstance.put("/messenges/send-messenges", form);
        if(res.status === 200){
          setMessenges(prev => {
            return prev.map(data => {
              if(data.genId){
                  if(data.genId === genId){
                    return {...data, loading: false}
                  }
              }
              return data;
            })
          })
          
          if(socket){
            socket.emit("sending-chat-message", { ...res.data.messenge }, (data) => {})
          }
        }
       
      }
      
    }catch(e){
      console.log(e)
      return
    }
  }
  useEffect(() => {
    if(socket){
      socket.on("new-chat-message",  (data) => {
        setMessenges(prev => {
          return [...prev, {
            ...data.data
          }]
        })
        play();
      })
      
    }
  }, [socket]);
 
  return (
    <div className="w-100 ">
      {loading ? (
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center loading-msg-container">
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
              <MessagesContainer messenges={messenges} setMessenges={setMessenges} reciever={reciever} photos={photos} setPhotos={setPhotos} />
              <SendMessages message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} photos={photos} setPhotos={setPhotos}/>
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
