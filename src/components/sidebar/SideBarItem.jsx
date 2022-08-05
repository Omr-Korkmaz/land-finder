import React from "react";
import { NavLink } from "react-router-dom";
import './sidebarItem.scss'

const SidebarItem = (props) => {
  let { name, path, icon } = props;

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <li className="menu-item">
        <NavLink
        className="menu-item__link"
          exact
          to={path}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
         
              {icon}
             
              <span>{name}</span>
     
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItem;
