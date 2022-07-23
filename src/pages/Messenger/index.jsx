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

import { useWindowSize } from "../../reusable/common";
const Messenger = () => {
  const history = useHistory();
  const [hide, setHide] = useState(true);
  const [tablist, setTablist] = useState({
    messenges: true,
    followed: false,
    writer: false,
  });
  const size = useWindowSize();

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
            {tablist.messenges && <Messenging  setHide={setHide} hide={hide} size={size}/>}
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
