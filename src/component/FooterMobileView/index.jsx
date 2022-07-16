import React, { useState, useEffect } from "react";
import "./style.scss";
import {
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const FooterMobileView = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize.innerWidth < 700 ? (
    <div className="container-footer-mobile-view w-100">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <AiOutlineBell className="pointer" size={23} />
      </div>
      <div className=" shadow mobile-user-Footer pointer">
        {user ? (
          user.profile.url ? (
            <img alt="user-profile" url={user.profile.url}/>
          ) : (
            <Avatar name={user.name} round={true} size={55} />
          )
        ) : (
          "no-user"
        )}
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <AiOutlineMessage className="pointer" size={23} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default FooterMobileView;
