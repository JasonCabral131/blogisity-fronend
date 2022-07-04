import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useHistory } from "react-router-dom";
import "./style.scss";
const SidebarList = ({ path, icon, name, children, ...props }) => {

  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const handleDropdown = (e) => {
    setDropdown(!dropdown);
  };
  const handleLink = (e) => {
    if (!children) {
      e.stopPropagation();
      history.push(`/admin${path}`);
      return;
    }
    handleDropdown();
  };

  return (
    <div>
      <div 
      onClick={handleLink}
      className="sidebar-link-container d-flex align-items-center py-1 justify-content-between  pointer px-2 mx-1">
        <div className="  d-flex align-items-center p-1 justify-content-start" >
          <IconContext.Provider value={{ size: 16 }}>
            {icon}
          </IconContext.Provider>
          <div className="sidebar-link ml-2">{name}</div>
        </div>
        {children ? (
          children.length > 0 ? (
            <div className="d-flex align-items-center justify-content-end">
              <div className="link-container">
                {dropdown ? (
                  <IoIosArrowUp
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                    size={16}
                  />
                ) : (
                  <IoIosArrowDown
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                    size={16}
                  />
                )}
              </div>
            </div>
          ) : null
        ) : null}
      </div>
      {dropdown ? (
        children ? (
          children.length > 0 ? (
            <div className="link-container px-2">
              {children.map((nav, key) => {
                return <SidebarList key={key} {...nav} />;
              })}
            </div>
          ) : null
        ) : null
      ) : null}
    </div>
  );
};

export default SidebarList;
