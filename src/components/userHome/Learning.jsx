/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import courseService from "../../services/course.service";
import Accordion from "./Accordion";

const Learning = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAdmin, isLoggedIn } = useContext(AuthContext);

  let userId;
  if (user) {
    userId = user._id;
  }

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const response = await courseService.getUserCourses(userId);
      setAllCourses(response.data.courses);
      console.log(response.data.courses);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [userId]);

  return (
    <div>
      <p className="title is-size-4">All your learning</p>
      {allCourses.map((course, index) => (
        <div key={course._id} className="mb-4">
          <Accordion number={index + 1} title={course.name}>
            <p>{course.description}</p>
            <div className="buttons">
              <button className="button is-primary">Learn</button>
              <button className="button is-danger">Unenrol</button>
            </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Learning;
