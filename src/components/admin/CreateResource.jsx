/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CreateResource = ({ title, gotoPage, path }) => {
  return (
    <div className = "card is-clickable" onClick={() => gotoPage(path)}>
      <div className = "card-header">
        <p className = "card-header-title">
          {title}
        </p>
      </div>
      <div className = "card-content">
        <div className = "has-text-centered">
          <i className = "fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default CreateResource
