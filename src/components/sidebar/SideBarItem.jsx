import React from 'react'
import { NavLink } from 'react-router-dom';

const SideBarItem = (props) => {

let {name, path, icon} = props;

let activeStyle = {
    textDecoration: "underline",
  };




  return (
    <div>
<NavLink
      exact
      to={path}
      style={({ isActive }) =>
      isActive ? activeStyle : undefined
    }
    >

      {icon}
      <span>{name}</span>
    </NavLink>

    </div>
  )
}

export default SideBarItem