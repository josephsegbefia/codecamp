/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SideBarItem = ({ name, icon, path, gotoPage, pagePath }) => {
  return (
    <>
      <button
        type = "button"
        className = "button is-large pl-6"
        onClick = {() => gotoPage(path)}
        style={{ backgroundColor: (path === pagePath) ? 'teal' : '' }}

      >
        <span className = "icon is-medium is-size-4">
          <i className = {icon}></i>
        </span>
        <span className = "is-size-4">{name}</span>
      </button>
    </>
  )
}

export default SideBarItem
