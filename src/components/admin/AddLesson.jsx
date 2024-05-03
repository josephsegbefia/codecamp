/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import courseService from "../../services/course.service";
import Loader from "../notifications/Loader";

import { LANGUAGE_VERSIONS } from "../../services/constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const AddLesson = () => {
  const [courses, setCourses] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [chosenCourse, setChosenCourse] = useState({});
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchCourse = (event) => {
    event.preventDefault();
    setLoadingCourses(true);
    const searchValue = event.target.value;
    setSearchVal(searchValue);
    if (searchValue) {
      courseService
        .searchCourse(searchValue)
        .then((response) => {
          setCourses(response.data.courses);
          setLoadingCourses(false);
        })
        .catch((error) => {
          console.error("Error searching courses:", error);
          setLoadingCourses(false);
        });
    } else {
      // Clear the courses if the search value is empty
      setCourses([]);
      setLoadingCourses(false);
    }
  };

  const selectCourse = (name, id) => {
    setChosenCourse({
      name: name,
      id: id
    });
    setCourses([]);
    setShowForm(true);
    setSearchVal("");
  };

  console.log(chosenCourse);
  return (
    <>
      {!showForm && (
        <div className="columns">
          <div className="column">
            <div className="field mb-4">
              <label className="label">
                Find course for which lesson would be created
              </label>
              <div className="control">
                <input
                  required
                  className="input is-primary"
                  type="text"
                  placeholder="Course name"
                  value={searchVal}
                  onChange={searchCourse}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {loadingCourses ? (
        <Loader />
      ) : (
        courses.length > 0 &&
        courses.map((course) => (
          <div className="columns" key={course._id}>
            <div className="column">
              <div className="card">
                <div className="card-body p-2">
                  <p
                    onClick={() => selectCourse(course.name, course._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {course.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {courses.length === 0 && showForm && (
        <>
          <div className="columns">
            <div className="column">
              <p className="title is-size-6">
                Creating a lesson for {chosenCourse.name}
              </p>
            </div>
          </div>
          <form>
            <div className="columns">
              <div className="column">
                <div className="field mb-4">
                  <label className="label">Lesson title</label>
                  <div className="control">
                    <input
                      required
                      className="input is-primary"
                      type="text"
                      placeholder="Course name"
                      value={name}
                      // onChange = {(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="select is-fullwidth">
                  <select
                    required
                    // value = {programmingLanguage}
                    // onChange = {(e) => setProgrammingLanguage(e.target.value)}
                  >
                    <option>Programming Language</option>
                    {languages.map(([lang, version]) => (
                      <option key={version}>
                        {lang} {version}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="column">
                <div className="select is-fullwidth">
                  <select
                    required
                    // value = {level}
                    // onChange = {(e) => setLevel(e.target.value)}
                  >
                    <option>Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                  </select>
                </div>
              </div>

              <div className="column">
                <div className="field mb-4">
                  {/* <label className = "label">Name of Course</label> */}
                  <div className="control">
                    <input
                      required
                      className="input is-primary"
                      type="text"
                      placeholder="Est. Duration in mins"
                      // value = {estimatedDuration}
                      // onChange = {(e) => setEstimatedDuration(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <textarea
                  required
                  className="textarea"
                  placeholder="Provide a brief description of the course"
                  // value = {description}
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons">
              <button
                type="submit"
                className={`button is-primary ${isLoading ? "is-loading" : ""}`}
              >
                Create Course
              </button>
              <button type="button" className="button is-danger">
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default AddLesson;
