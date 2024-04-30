/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ProgressCard = ({path, name, lesson }) => {
  return (
    <div>
      <p className = "is-size-6">{path}</p>
      <p className = "title is-size-5">{name}</p>
      <p className = "is-size-6">Lesson</p>
      <p className = "title is-size-5">{lesson}</p>
      <div className = "field is-grouped">
        <p className ="control">
          <button className = "button is-link">View Syllabus</button>
        </p>
        <p className = "control">
          <button className = "button">Continue learning</button>
        </p>
      </div>
    </div>
  )
}

export default ProgressCard
