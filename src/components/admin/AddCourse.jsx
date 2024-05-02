/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { LANGUAGE_VERSIONS } from '../../services/constants';

const languages = Object.entries(LANGUAGE_VERSIONS)

const AddCourse = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <p className = "title is-size-5 has-text-centered">Add Course</p>

      <form>
        <div className = "columns">
          <div className = "column">
            <div className = "field mb-4">
              <label className = "label">Name of Course</label>
              <div className = "control">
                <input
                  required
                  className = "input is-primary"
                  type = "text"
                  placeholder = "Course name"
                  // value = {email}
                  // onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className = "columns">
          <div className = "column">
            <div className="select is-fullwidth">
              <select
                // value = {status}
                // onChange = {(e) => setStatus(e.target.value)}
              >
                <option>Programming Language</option>
                {
                  languages.map(([lang, version]) => (
                    <option key = {version}>{lang} {version}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className = "column">
            <div className="select is-fullwidth">
              <select
                // value = {status}
                // onChange = {(e) => setStatus(e.target.value)}
              >
                <option>Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
          </div>

          <div className = "column">
          <div className="select is-fullwidth">
              <select
                // value = {status}
                // onChange = {(e) => setStatus(e.target.value)}
              >
                <option>Path</option>
                <option>Course</option>
                <option>Skill Path</option>
                <option>Career Path</option>
              </select>
            </div>
          </div>

          <div className = "column">
          <div className = "field mb-4">
              {/* <label className = "label">Name of Course</label> */}
              <div className = "control">
                <input
                  required
                  className = "input is-primary"
                  type = "text"
                  placeholder = "Est. Duration"
                  // value = {email}
                  // onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className = "columns">
          <div className = "column">
            <textarea
              className = "textarea"
              placeholder = "Provide a brief description of the course"
              // value = {description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button type = "submit" className = {`button is-primary ${isLoading ? "is-loading" : ""}`}>Create Course</button>
      </form>
    </div>
  )
}

export default AddCourse
