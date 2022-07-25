import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import MessengingContent from "../../component/MessengingContent";
import NoContentChat from "./NoContentChat";
import "./style.scss";
import { AiOutlineMessage } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import Messenging from "./Messenging";
import Followed from "./Followed";
import Writer from "./Writer";
import newMssgMP3 from "./../../assets/ringtune/messenger.mp3"
import { useWindowSize } from "../../reusable/common";
import axiosInstance from "../../config/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from 'use-sound';
const Messenger = () => {
  const history = useHistory();
  const [hide, setHide] = useState(true);
  const [play] = useSound(newMssgMP3);
  const {socket} = useSelector(state => state.socket);
  const [tablist, setTablist] = useState({
    messenges: true,
    followed: false,
    writer: false,
  });
  const [loading, setloading] = useState(false);
  const [inboxes, setInboxes] = useState([]);
  const size = useWindowSize();
  const handleGetInboxMessages = async() => {
      try{
        setloading(true)
        const res = await axiosInstance.get("/messenges/messenges/inbox");
        setloading(false)
        if(res.status === 200){
          setInboxes(res.data.room)
        }
      }catch(e){
        setloading(false)
      }
  }
  useEffect(() => {
    handleGetInboxMessages();
  }, [])
  useEffect(() => {
    if(socket){
      socket.on("update-chat-message-inbox",  (data) => {
        const message = data.data;
        setInboxes(prev => {
          let currentIndex = null;
          let moverArray = prev.map((inbox, index) => {
            if(inbox.key === message.reciever){
              currentIndex = index;
              return {...inbox, chats: {
                byme: true,
                date:message.createdAt,
                message:message. messenges,
                images: message.photos
              }};
            }
            return inbox;
          })
          if(currentIndex){
            moverArray =  immutableMove(moverArray, currentIndex, 0)
          }
          
          return moverArray;
        
         })
        const exist = inboxes.some(d => d.key === message.reciever );
        if(!exist){
          handleGetInboxMessages();
        }
      })
      socket.on("new-chat-message",  (data) => {
        const message = data.data;
        play();
         setInboxes(prev => {
          let currentIndex = null;
          let moverArray = prev.map((inbox, index) => {
            if(inbox.key === message.sender){
              currentIndex = index;
              return {...inbox, chats: {
                byme: true,
                date:message.createdAt,
                message:message. messenges,
                images: message.photos
              }};
            }
            return inbox;
          })
          if(currentIndex){
            moverArray =  immutableMove(moverArray, currentIndex, 0)
          }
          return moverArray;
         })
         const exist = inboxes.some(d => d.key === message.sender );
         if(!exist){
           handleGetInboxMessages();
         }
      })
    }
  }, [socket]);
  function immutableMove(arr, from, to) {
    return arr.reduce((prev, current, idx, self) => {
      if (from === to) {
        prev.push(current);
      }
      if (idx === from) {
        return prev;
      }
      if (from < to) {
        prev.push(current);
      }
      if (idx === to) {
        prev.push(self[from]);
      }
      if (from > to) {
        prev.push(current);
      }
      return prev;
    }, []);
  }
  return (
    <div className="messenger-containerx w-100">
      <div className="row messenger-row">
        <div className="col-md-3  m-0 p-0 border">
          <div className="chat-heading-container ">
            <div
              className="chat-title"
              onClick={() => {
                history.push("/home");
              }}
            >
              Blogisity
            </div>
            <div className="search-container-chat">
              <input placeholder="search..." type={"search"} />
            </div>
            <div className="container-chat-tab">
              <div
                className={`chat-tab-header w-100 border pointer ${
                  tablist.messenges ? "active" : ""
                }`}
                onClick={() => {
                  setTablist({
                    messenges: true,
                    followed: false,
                    writer: false,
                  });
                  handleGetInboxMessages();
                }}
              >
                <AiOutlineMessage size={20} />{" "}
                <div className="ms-1">Messages</div>
              </div>
              <div
                className={`chat-tab-header w-100 border pointer ${
                  tablist.followed ? "active" : ""
                }`}
                onClick={() => {
                  setTablist({
                    messenges: false,
                    followed: true,
                    writer: false,
                  });
                }}
              >
                <BiUserCheck size={20} /> <div className="ms-1">Followed</div>
              </div>
              <div
                className={`chat-tab-header w-100 border pointer ${
                  tablist.writer ? "active" : ""
                }`}
                onClick={() => {
                  setTablist({
                    messenges: false,
                    followed: false,
                    writer: true,
                  });
                }}
              >
                <HiOutlineUsers size={20} /> <div className="ms-1">Writers</div>
              </div>
            </div>
            {tablist.messenges && <Messenging  setHide={setHide} hide={hide} size={size} inboxes={inboxes} loading={loading}/>}
            {tablist.followed && <Followed setHide={setHide} hide={hide} size={size}/>}
            {tablist.writer && <Writer setHide={setHide} hide={hide}  size={size} />}
          </div>
        </div>
        <div className="col-md-9 m-0 p-0  content-chat-info-container" style={{display: size.width < 600 ? hide ? "none" : "block" : "block"}}>
          <div className="w-100">
            <Switch>
              <Route
                path={"/blogisity-messenging"}
                exact
                name="To Chat Content"
                render={() => {
                  return <NoContentChat />;
                }}
              />
              <Route
                path={"/blogisity-messenging/:id"}
                name="To Chat With"
                render={() => {
                  return <MessengingContent setHide={setHide} hide={hide}/>;
                }}
              />
              <Redirect to="/blogisity-messenging" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
