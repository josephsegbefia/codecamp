/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import courseService from "../../services/course.service";
import Loader from "../notifications/Loader";
import CourseCard from "./CourseCard";

const AllResources = () => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAllResources = () => {
    courseService
      .getCourses()
      .then((response) => {
        console.log(response.data.courses);
        setResources(response.data.courses);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchAllResources();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="columns is-multiline">
          {resources.length > 0 &&
            resources.map((resource) => (
              <CourseCard
                key={resource._id}
                courseId={resource._id}
                level={resource.level}
                name={resource.name}
                path={resource.path}
                lang={resource.programmingLanguage}
                description={resource.description}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default AllResources;
