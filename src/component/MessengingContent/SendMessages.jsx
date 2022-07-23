import React, { useState } from "react";

import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
const SendMessages = ({ message, setMessage, handleSendMessage }) => {
  const [emoji, setEmoji] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setMessage((prev) => {
      return (prev += emojiObject.emoji);
    });
  };
  return (
    <form className="chat-main-heading-container" onSubmit={handleSendMessage}>
      <MdOutlineAddPhotoAlternate
        size={25}
        className="pointer"
        color="#0084FF"
      />
      <div className="emoji-chat-container">
        <div className="picker-container">
          {emoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
        </div>
        <BsEmojiSmile
          size={23}
          className="pointer ms-1"
          color="#0084FF"
          onClick={() => {
            setEmoji(!emoji);
          }}
        />
      </div>
        
      <input
        placeholder="Aa"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      {message.length > 1 ? (
        <button type="submit" className="btn-send-message">
        <AiOutlineSend size={25} className="pointer" color="#0084FF" />
        </button>
      ) : null}
    </form>
  );
};

export default SendMessages;
