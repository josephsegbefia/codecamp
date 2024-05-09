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
      console.log(response.data.courses); // Log the fetched courses
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
      {/* <section className="container-accordion"> */}
      <Accordion title={"React 101"} number={"1"}>
        <p>Hello React</p>
      </Accordion>
      {/* </section> */}
    </div>
  );
};

export default Learning;
