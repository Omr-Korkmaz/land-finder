import React from 'react'
import './sidebar.scss';
import SidebarItem from './SidebarItem'
import {routes} from '../../menuData';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>

<div className="sidebar-container__top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="top__logo">adminName</span>
        </Link>
      </div>
      <hr />

    <nav className="center">
<ul>

      {routes.map(routeItem =>(
        <SidebarItem  name={routeItem.name} path={routeItem.path} icon = {routeItem.icon}  />
        ))}
        </ul>
    </nav>
    </div>
  );
}

export default Sidebar