/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import ProgressCard from "./ProgressCard";
import courseService from "../../services/course.service";

const Dashboard = () => {
  const [course, setCourse] = useState([]);
  const { user, isAdmin, isLoggedIn } = useContext(AuthContext);

  let userId;
  if (user) {
    userId = user._id;
  }

  const fetchCourses = () => {
    courseService
      .getUserCourses(userId)
      .then((response) => {
        setCourse(response.data.courses[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, [userId]);

  console.log(course);

  return (
    <div className="container">
      <div className="columns">
        <div className="column px-6">
          {course && <p className="title is-size-4">Continue learning...</p>}
        </div>
      </div>
      <div className="columns">
        <div className="column px-6">
          {course && (
            <progress className="progress is-primary" value="50" max="100">
              50%
            </progress>
          )}
        </div>
      </div>
      <div className="columns">
        <div className="column px-6">
          {course ? (
            <ProgressCard
              path={course.path}
              name={course.name}
              // lesson={course.lessons ? course.lesson[0] : "No lessons yet"}
            />
          ) : (
            <p>
              You have not started any courses yet. Explore our courses on
              offer. <br />
              <Link to="/courses">Browse Courses</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
