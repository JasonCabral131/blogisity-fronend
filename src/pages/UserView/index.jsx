import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { Audio } from "react-loader-spinner";
import "./style.scss";
import "./../UserInformation/style.scss";
import Post from "../UserInformation/Post";
import Followers from "../UserInformation/Followers";
import Followring from "../UserInformation/Followring";
import Avatar from "react-avatar";
import PlainGrey from "./../../assets/img/PlainGrey.jpg";
import { BsChatDots, BsPersonPlus } from "react-icons/bs";
import { BiUserX } from "react-icons/bi";
import NoUserFound from "./../../assets/img/NoUserFound.png";
import Published from "../UserInformation/Published";
import {AiOutlineMail} from 'react-icons/ai';
const UserView = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [writer, setWriter] = useState(null);
  const [loadingFL, setLoadingFl] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const handleViewUser = async () => {
    setLoading(true);
    const urlProvider = user
      ? `/user/view-writer/${id}?viewer=${user._id}`
      : `/user/view-writer/${id}`;
    axiosInstance
      .get(urlProvider)
      .then((res) => {
        setLoading(false);
        setWriter({
          ...res.data.user,
          post: res.data.Post,
          follower: res.data.follower,
          following: res.data.following,
          posted: res.data.posted,
          followed: res.data.followed,
        });
      })
      .catch((e) => {
        setWriter(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user) {
      if (user._id === id) {
        history.push("/writer");
      }
    }
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    handleViewUser();
    // eslint-disable-next-line
  }, [user, id]);
  const handleFollowUnFollow = async () => {
    try {
      setLoadingFl(true);
      const res = await axiosInstance.put("/user/follow-unfollow", {
        follower: user._id,
        following: id,
      });
      setLoadingFl(false);
      if (res.status === 200) {
        setWriter((prev) => {
          return {
            ...prev,
            followed: res.data.followed,
            follower: res.data.follower,
            following: res.data.following,
            post: res.data.Post,
          };
        });
      }
    } catch (e) {
      setLoadingFl(false);
    }
  };
  return (
    <div className="w-100">
      {loading ? (
        <div className="w-100 mt-5 d-flex justify-content-center align-items-center flex-column">
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
          <h5> Loading Information</h5>
        </div>
      ) : null}

      {!loading && writer && (
        <>
          {" "}
          <div className="writer-container">
            <div className="writer-content">
              <img
                className="writer-cover-profile"
                src={
                  writer
                    ? writer.background?.url
                      ? writer.background?.url
                      : PlainGrey
                    : PlainGrey
                }
                alt="profile cover"
              />

              <div className="profile-container-blog">
                {writer ? (
                  writer.profile.url ? (
                    <img
                      src={writer.profile.url}
                      alt="profile user"
                      className="writer-profile"
                    />
                  ) : (
                    <div className="writer-profile">
                      {" "}
                      <Avatar name={writer.name} size={145} round={true} />{" "}
                    </div>
                  )
                ) : null}
              </div>
            </div>
            <div className="writer-information p-2 ">
              <div className="writer-content-info ">
                <div className="writer-name text-wrap text-truncate">
                  {writer ? writer.name : ""}
                </div>
                <div className="writer-name text-wrap text-truncate">
                  <div className="user-email-view"><AiOutlineMail size={17} /> <div className="ms-1">{writer.email}</div></div>
                </div>
                {user && user.onboarding === 1 ? (
                  <div className="writer-name text-wrap text-truncate d-flex mb-2">
                    <a className="chat-btn-message pointer" href={"/blogisity-messenging/" + writer._id}>
                      <BsChatDots /> <div className="ms-1">Message</div>
                    </a>

                    <button
                      className={`follow-btn-message ms-1 ${
                        loadingFL ? "no-allowed-pointer" : ""
                      }`}
                      onClick={handleFollowUnFollow}
                      disabled={loadingFL}
                    >
                      {writer.followed ? (
                        <>
                          {" "}
                          <BiUserX /> <div className="ms-1">Following</div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <BsPersonPlus /> <div className="ms-1">Follow</div>
                        </>
                      )}
                    </button>
                  </div>
                ) : null}

                <div className="post-follower-followring-container">
                  <Post number={writer.post} />
                  <Followers number={writer.follower} />
                  <Followring number={writer.following} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 writer-content">
            <Published urlPublished={`/user/view-writer-published/${id}`} />
          </div>
        </>
      )}
      {!loading && !writer && (
        <div className="w-100 d-flex mt-5 justify-content-center align-items-center">
          <img alt={"no user found"} src={NoUserFound} />
        </div>
      )}
    </div>
  );
};

export default UserView;
