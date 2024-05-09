/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import AllResources from "../admin/AllResources";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const { isAdmin } = useContext(AuthContext);
  return (
    <>
      <div className="columns">
        <div className="column">
          <p className="title is-size-5 has-text-centered">Course offerings</p>
          <hr />
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-quarter">
          <p>SideBar</p>
        </div>

        <div className="column is-two-thirds">
          <AllResources />
        </div>
      </div>
    </>
  );
};

export default Courses;
