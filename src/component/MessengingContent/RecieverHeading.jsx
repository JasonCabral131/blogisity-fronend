import React from 'react'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Avatar from "react-avatar";
import {BsArrowLeft} from "react-icons/bs";
const RecieverHeading = ({reciever, activeUser, hide, setHide}) => {
  return (
    <div className="chat-main-heading-container">
                <div className="close-hide-chat" onClick={() => {
                  setHide(!hide)
                }}>
                  <BsArrowLeft size={25} className="mx-1"/>
                </div>
                {reciever.profile.url ? (
                  <Avatar round src={reciever.profile.url} size={40} />
                ) : (
                  <Avatar round name={reciever.name} size={40} />
                )}
                <div className="reciever-name text-wrap text-truncate">
                  {reciever.name}
                </div>

                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {" "}
                      {activeUser ? "Active User" : "Inactive User"}
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <div
                      ref={ref}
                      className={`circle-chat ${activeUser ? "activeUser": "unactive"} pointer shadow`}
                      {...triggerHandler}
                    />
                  )}
                </OverlayTrigger>
              </div>
  )
}

export default RecieverHeading