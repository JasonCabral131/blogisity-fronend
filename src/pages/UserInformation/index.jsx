import React, { useState } from "react";
import Followers from "./Followers";
import Followring from "./Followring";
import Post from "./Post";
import "./style.scss";
import { Switch, Route } from "react-router-dom";
import CreateContent from "../../component/CreateBlogContent";
import { useHistory } from "react-router-dom";
import Published from "./Published";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import PlainGrey from "./../../assets/img/PlainGrey.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { useRef } from "react";
import { changeBackgroundProfile, changeProfile } from "../../redux/actions";
import LoadingProFileImg from "./../../assets/img/LoadingImg.gif"
import LoadingBngImg from "./../../assets/img/loadingBackground.gif";
import UpdateBlog from "../../component/CreateBlogContent/UpdateBlog";
const UserInformation = (props) => {
  const history = useHistory();
  const imgeRef = useRef();
  const bngRef = useRef();
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingBNG, setLoadingBNG] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleChangeProfile = async (e) => {
    try {
      
      const { files } = e.target;
      for (let file of files) {
        const form = new FormData();
        form.append("file", file)
        if(file){
          setLoadingProfile(true);
          await dispatch(changeProfile(form))
          setLoadingProfile(false);
        }
    
      }
      setLoadingProfile(false);
    } catch (e) {
      setLoadingProfile(false);
    }
  };
  const handleChangeBackgroundProfile = async (e) => {
    try {
    
      const { files } = e.target;
      for (let file of files) {
        const form = new FormData();
        form.append("file", file)
        setLoadingBNG(true);
         await dispatch(changeBackgroundProfile(form))
         setLoadingBNG(false);
      }
    
    } catch (e) {
      setLoadingBNG(false);
    }
  };
  return (
    <div className="w-100">
      <div className="writer-container">
        <div className="writer-content">
          <img
            className="writer-cover-profile"
            src={
              loadingBNG ? LoadingBngImg :  user
                ? user.background?.url
                  ? user.background?.url
                  : PlainGrey
                : PlainGrey
            }
            alt="profile cover"
          />
          <div  className={`edit-cover-photo-container shadow ${loadingBNG ? "no-allowed-pointer" : ""}`} onClick={() => {
              if(!loadingBNG) bngRef.current.click();
          }}>
          <AiOutlineCamera size={20} />
          <div>Edit cover photo</div>
          <input
                ref={bngRef}
                type={"file"}
                multiple={false}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChangeBackgroundProfile}
              />
          </div>
          <div className="profile-container-blog">
            {loadingProfile ?  <img
                  src={LoadingProFileImg}
                  alt="profile user"
                  className="writer-profile"
                /> : user ? (
              user.profile.url ? (
                <img
                  src={user.profile.url}
                  alt="profile user"
                  className="writer-profile"
                />
              ) : (
                <div className="writer-profile">
                  {" "}
                  <Avatar name={user.name} size={145} round={true} />{" "}
                </div>
              )
            ) : null}
            <div
              className={`change-icon-container ${loadingProfile ? "no-allowed-pointer" : ""}`}
              onClick={() => {
                if(!loadingProfile)  imgeRef.current.click();
              
              }}
            >
              <AiOutlineCamera size={24} />
              <input
                ref={imgeRef}
                type={"file"}
                multiple={false}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
        </div>
        <div className="writer-information p-2 ">
          <div className="writer-content-info ">
            <div className="writer-name text-wrap text-truncate">
              {user ? user.name : ""}
            </div>
            <div className="post-follower-followring-container">
              <Post />
              <Followers />
              <Followring />
            </div>
          </div>
        </div>
        
        <div className="writer-nav d-flex">
          <div
            className={`${
              props?.history?.location?.pathname === "/admin/writer" ||
              props?.history?.location?.pathname === "/writer"
                ? "active"
                : ""
            }`}
            onClick={() => {
              history.push(
                props.location.pathname.includes("/admin/writer/")
                  ? "/admin/writer"
                  : "/writer"
              );
            }}
          >
            Create
          </div>
          <div
            className={`${
              props?.history?.location?.pathname === "/admin/writer/publish" ||
              props?.history?.location?.pathname === "/writer/publish"
                ? "active"
                : ""
            }`}
            onClick={() => {
              history.push(props.location.pathname + "/publish");
            }}
          >
            Post
          </div>
        </div>
      </div>
      <div className="mt-1 writer-content">
        <Switch>
          <Route
            path={
              props.location.pathname.includes("/admin/writer")
                ? "/admin/writer"
                : "/writer"
            }
            exact
            render={(route) => {
              return <CreateContent {...route} />;
            }}
          />
          <Route
            path={
              props.location.pathname.includes("/admin/writer/publish")
                ? "/admin/writer/publish"
                : "/writer/publish"
            }
            exact
            render={(route) => {
              return <Published urlPublished={"/user/published"} {...route}/>;
            }}
          />
           <Route
            path={"/writer/update-user-blog/:id"}
            exact
            render={(route) => {
              return <UpdateBlog  {...route}/>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default UserInformation;
