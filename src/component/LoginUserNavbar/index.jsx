import React from "react";
import "./style.scss";
import {
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import Dropdown from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signout } from "../../redux/actions";
import Avatar from "react-avatar";
const LoginUserNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="user-information">
      <Dropdown
        onPoint={<AiOutlineBell className="pointer" size={23} />}
        headingView={{msg: "View All Notifications", url: ""}}
      >
        <h6 className="text-center mt-2 text-center">No Notification Found !!</h6>
      </Dropdown>

      <Dropdown
        onPoint={<AiOutlineMessage className="pointer" size={23} />}
        headingView={{msg: "View All Messages", url: "/blogisity-messenging"}}
      >
         <h6 className="text-center mt-2 text-center">No Message Found !!</h6>
      </Dropdown>
      {user ? (
        <div className="pointer" onClick={() => {
          history.push("/writer")
        }}> 
          {user?.profile?.url ? (
            <Avatar src={user?.profile?.url} size={35} round={true} />
          ) : (
            <Avatar name={user?.name} size={35} round={true} />
          )}
        </div>
      ) : null}
      <div className="">|</div>
      <div>
        <AiOutlineLogout
          className="pointer"
          size={23}
          onClick={() => {
            history.push("/");
            dispatch(signout());
          }}
        />
      </div>
    </div>
  );
};

export default LoginUserNavbar;
