/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import courseService from '../../services/course.service';
import Success from '../notifications/Success';
import Error from '../notifications/Error';
import { LANGUAGE_VERSIONS } from '../../services/constants';

const languages = Object.entries(LANGUAGE_VERSIONS)

const AddCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [path, setPath] = useState('');
  const [level, setLevel] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [reload, setReload] = useState(false);

  const createCourse = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = {name, description, programmingLanguage, path, level, estimatedDuration};
    courseService.createCourse(requestBody)
      .then((response) => {
        setIsLoading(false);
        setSuccess(response.data.message);
        setName('');
        setDescription('');
        setProgrammingLanguage('');
        setLevel('');
        setPath('');
        setEstimatedDuration('');
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data.message);
      })
  }

  const handleReload = () => {
    setReload(true);
    setSuccess('');
  }

  useEffect(() => {
    // Empty
  }, [reload])

  return (
    <div>
      <p className = "title is-size-5 has-text-centered">Add Course</p>
      { error && <Error message = {error} handleReload={handleReload} />}
      { success && <Success message = {success} handleReload = {handleReload} />}

      <form onSubmit={createCourse}>
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
                  value = {name}
                  onChange = {(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className = "columns">
          <div className = "column">
            <div className="select is-fullwidth">
              <select
                required
                value = {programmingLanguage}
                onChange = {(e) => setProgrammingLanguage(e.target.value)}
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
                required
                value = {level}
                onChange = {(e) => setLevel(e.target.value)}
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
                required
                value = {path}
                onChange = {(e) => setPath(e.target.value)}
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
                  placeholder = "Est. Duration in mins"
                  value = {estimatedDuration}
                  onChange = {(e) => setEstimatedDuration(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className = "columns">
          <div className = "column">
            <textarea
              required
              className = "textarea"
              placeholder = "Provide a brief description of the course"
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className = "columns">
          <div className = "column">
            <label className = "checkbox">
              <input type="checkbox" className = "mr-3"/>
               Publish course
            </label>
          </div>
        </div>
        <button type = "submit" className = {`button is-primary ${isLoading ? "is-loading" : ""}`}>Create Course</button>
      </form>
    </div>
  )
}

export default AddCourse
