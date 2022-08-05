import React from 'react'
import './sidebar.scss';
import SideBarItem from './SideBarItem'
import {routes} from '../../menuData';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>

<div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">adminName</span>
        </Link>
      </div>
      <hr />

      <div className="center">
    <nav>

      {routes.map(routeItem =>(
        <SideBarItem  name={routeItem.name} path={routeItem.path} icon = {routeItem.icon}  />
      ))}
    </nav>
    </div>
    </div>
  );
}

export default Sidebar