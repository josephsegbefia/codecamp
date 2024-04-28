/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Success = ({ message, handleReload }) => {


  return (
    <div className = "columns my-3">
      <div className = "column">
      <div className = "notification is-primary">
        <button className = "delete" onClick = {handleReload}></button>
          <p className = "has-text-centered">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Success
