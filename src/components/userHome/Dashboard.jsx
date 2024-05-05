/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
import ProgressCard from "./ProgressCard";

const Dashboard = () => {
  const { user, isAdmin } = useContext(AuthContext);

  console.log(isAdmin);
  return (
    <div className="container">
      <div className="columns">
        <div className="column px-6">
          {user?.courses.length > 0 && (
            <p className="title is-size-4">Continue learning...</p>
          )}
        </div>
      </div>
      <div className="columns">
        <div className="column px-6">
          {user?.courses.length > 0 && (
            <progress className="progress is-primary" value="50" max="100">
              50%
            </progress>
          )}
        </div>
      </div>
      <div className="columns">
        <div className="column px-6">
          {user?.courses.length > 0 ? (
            <ProgressCard
              path="Course"
              name="Learn JavaScript"
              lesson="JavaScript 101"
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
