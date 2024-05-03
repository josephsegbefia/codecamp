/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import courseService from '../../services/course.service';
import Loader from '../notifications/Loader';

const AddLesson = () => {
  const [courses, setCourses] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [chosenCourse, setChosenCourse] = useState({});
  const [loadingCourses, setLoadingCourses] = useState(false);

  const searchCourse = (event) => {
    event.preventDefault();
    setLoadingCourses(true);
    const searchValue = event.target.value;
    setSearchVal(searchValue);
    if (searchValue) {
      courseService.searchCourse(searchValue)
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


  console.log(courses);
  return (
    <>
     <div className = "columns">
      <div className = "column">
        <div className = "field mb-4">
          <label className = "label">Find course for which lesson would be created</label>
          <div className = "control">
            <input
              required
              className = "input is-primary"
              type = "text"
              placeholder = "Course name"
              value = {searchVal}
              onChange = {searchCourse}
            />
          </div>
        </div>
      </div>
     </div>

      {loadingCourses ? <Loader /> : (
        courses.length > 0 && courses.map((course) => (
          <div className = "columns" key = {course._id}>
            <div className = "column">
              <div className = "card">
                <div className = "card-body p-2">
                  <p>{course.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))
       )
      }
    </>
  )
}

export default AddLesson;
