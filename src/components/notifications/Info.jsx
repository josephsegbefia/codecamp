/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Info = ({ message }) => {
  return (
    <div className = "columns">
      <div className = "column">
        <div className = "notification is-info">
          <p className = "has-text-centered">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Info
