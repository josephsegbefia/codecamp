/* eslint-disable no-unused-vars */
import React from 'react'
import ProgressCard from './ProgressCard'

const Dashboard = () => {
  return (
    <div className = "container">
      <div className = "columns">
        <div className = "column px-6">
          <p className = "title is-size-4">Continue learning...</p>
        </div>
      </div>
      <div className = "columns">
        <div className = "column px-6">
          <progress className = "progress is-primary" value = "50" max = "100">
            50%
          </progress>
        </div>
      </div>
      <div className = "columns">
        <div className = "column px-6">
          <ProgressCard path = "Course" name = "Learn JavaScript" lesson = "JavaScript 101" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
