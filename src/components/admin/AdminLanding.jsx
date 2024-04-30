/* eslint-disable no-unused-vars */
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SideBarItem from '../userHome/SideBarItem';
import AllResources from './AllResources';
import Create from './Create';
import Settings from './Settings'
import PublishedResources from './PublishedResources';


const sideBarButtons = [
  {name: "Create", icon: "fa-solid fa-plus", path: "create"},
  {name: "All Resources", icon: "fa-solid fa-list", path: "all-resources"},
  {name: "Published Resources", icon: "fa-solid fa-check", path: "published"},
  {name: "Settings", icon: "fa-solid fa-gears", path: "settings"},
]

const AdminLanding = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page')

  const gotoPage = (path) => {
    setSearchParams({ page: path });
  }

  return (
    <div className = "container">
      <div className = "columns">
        <div className = "column is-one-quarter">
          <aside className = "menu">
            <p className = "menu-label">Actions</p>
            <ul className = "menu-list">
              {
                sideBarButtons.map((button, index) => (
                  <li key = {index}><SideBarItem name = {button.name} icon = {button.icon} gotoPage = {gotoPage} path = {button.path} pagePath = {page} /></li>
                ))
              }
            </ul>
          </aside>
        </div>
        <div className = "column">
          {page === 'create' && <Create />}
          {page === 'all-resources' && <AllResources />}
          {page === 'published' && <PublishedResources />}
          {page === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  )
}

export default AdminLanding
