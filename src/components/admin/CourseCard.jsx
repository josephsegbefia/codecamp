/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CourseCard = ({ name, description, path, level }) => {
  return (
    <div className = "column is-one-third">
      <div className = "card">
        <div className = "card-content">
          <p className='mb-3'>{path} | {level}</p>
          <p className = "title is-size-6">{name}</p>
          <p>{description}</p>
        </div>
        <footer className = "card-footer">
          <p className="card-footer-item">
            <span>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          </p>
          <p className="card-footer-item has-text-danger"
            // onClick={()=> openDelete()}

          >
            <span>
              <i className="fa-solid fa-trash"></i>
            </span>
            </p>
        </footer>
      </div>

    </div>
  )
}

export default CourseCard
