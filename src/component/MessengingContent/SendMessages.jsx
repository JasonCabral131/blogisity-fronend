import React, { useState , useRef} from "react";

import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { getDataUrl } from "../../config/fetchingBlog";
import shortid from "shortid";
const SendMessages = ({ message, setMessage, handleSendMessage, photos, setPhotos }) => {
  const [emoji, setEmoji] = useState(false);
  const inputRef = useRef();

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prev) => {
      return (prev += emojiObject.emoji);
    });
  };
const ImageUpload = async(e) => {
  const files = e.target.files;
  for (let file of files) {
    const dataUrl = await getDataUrl(file);
    const id = await  shortid.generate();
    setPhotos((prev) => {
      return [...prev, { file, dataUrl , id}];
    });
  }
}
  return (
    <form className="send-container" onSubmit={handleSendMessage}>
      <MdOutlineAddPhotoAlternate
        size={25}
        className="pointer"
        color="#0084FF"
        onClick={() => {
          inputRef.current.click();
        }}
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
          e.stopPropagation();
          e.preventDefault();
          setMessage(e.target.value);
        }}
      />
      <input
      ref={inputRef}
        type={"file"}
        accept="image/png, image/gif, image/jpeg"
      style={{display:'none'}}
      onChange={ImageUpload}
      multiple={true}
    />
      {message.length > 1 || photos.length > 0 ? (
        <button type="submit" className="btn-send-message">
        <AiOutlineSend size={25} className="pointer" color="#0084FF" />
        </button>
      ) : null}
    </form>
  );
};

export default SendMessages;
