import React, { useState } from "react";
import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import axiosInstance from "./../../config/axios";
import axios from "axios";
import { useEffect } from "react";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import {useSelector} from "react-redux";
function NavbarSearch() {
  const [searching, setSeaching] = useState(false);
  const [val, setVal] = useState("");
  const [result, setResult] = useState({});
  const {user} = useSelector(state => state.auth);
  const history = useHistory();
  const handleSearch = () => {
    setResult({});

    if (val === "") return;
    let cancel = null;
    axiosInstance({
      url: `/search?query=${val}`,
      method: "GET",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setResult(res.data.searches);
        setSeaching(false);
      })
      .catch((e) => {
        setSeaching(false);
        if (axios.isCancel(e)) return;
      });
  };
  const ResultContent = ({ info, children }) => {
    return (
      <div className="w-100 search-content">
        <div className="w-100 title-search">{info}</div>
        {children}
      </div>
    );
  };
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [val]);
  const handleClick = (data) => {
    setResult({});
    if(user){
      if(data._id === user._id ){
        history.push("/writer")
        return;
      }else{
        history.push(`/view-writer/${data._id}`)
      }
    }else{
      history.push(`/view-writer/${data._id}`)
    }
 
  };
  return (
    <button
      className={`btn-search p-2 `}
      onBlur={(e) => {
        setSeaching(false);
      }}
    >
      <div className="search-form">
        <span className="icon-search2">
          <AiOutlineSearch size={16} />
        </span>
        <input
          value={val}
          type={"search"}
          placeholder="Search..."
          className="input-search"
          onChange={(e) => {
            setSeaching(true);

            setVal(e.target.value);
          }}
          onFocus={(e) => {
            handleSearch();
            setSeaching(true);
          }}
        />
      </div>

      {searching && val.length > 0 ? (
        <div className="search-result shadow">
          <div>loading</div>
        </div>
      ) : Object.keys(result).length > 0 ? (
        <div className="search-result shadow">
          {Object.keys(result).map((key) => {
            if (key === "user") {
              return (
                <ResultContent info={key} key={Math.random()}>
                  {result[key].map((data) => {
                    return (
                      <div
                        onClick={() => {
                          handleClick(data);
                        }}
                        className="w-100 user-search-container d-flex justify-content-start align-items-center pointer"
                        key={Math.random()}
                      >
                        {data.profile.url ? (
                          <Avatar
                            src={data.profile.url}
                            size={40}
                            round={true}
                          />
                        ) : (
                          <Avatar size={40} name={data.name} round={true} />
                        )}
                        <div className="search-name w-100 text-truncate text-wrap">
                          {data.name}
                        </div>
                      </div>
                    );
                  })}
                </ResultContent>
              );
            }
            if (key === "blog") {
              return (
                <ResultContent info={key} key={Math.random()}>
                  {result[key].map((data) => {
                    return (
                      <div
                        className="w-100 d-flex flex-column justify-content-start align-items-center mt-1"
                        key={Math.random()}
                        onClick= {() => {
                          setResult({})
                          history.push(`/blog-content/${slugify(data.title)}/${data._id}`)
                        }}
                      >
                        <div className="pointer text-wrap w-100 blog-search-title p-1">
                          {data.title}
                        </div>
                      </div>
                    );
                  })}
                </ResultContent>
              );
            }
            return (
              <ResultContent info={key} key={Math.random()}>
                {result[key].map((data) => {
                  return (
                    <div
                      className="w-100 d-flex flex-column justify-content-start align-items-center mt-1"
                      key={Math.random()}
                      onClick={() => {
                        history.push(`/view-content/${slugify(data.category)}/${data._id}`)
                      }}
                    >
                      <div className="pointer text-wrap w-100 blog-search-title p-1">
                        {data.category}
                      </div>
                    </div>
                  );
                })}
              </ResultContent>
            );
          })}
        </div>
      ) : null}
    </button>
  );
}

export default NavbarSearch;
