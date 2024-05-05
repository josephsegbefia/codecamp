/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSearchParams } from "react-router-dom";

const LessonSuccess = ({ message, handleReload, lessonId }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const createExercise = (path) => {
    const page = searchParams.get("page");
    setSearchParams({ page: path });
  };

  return (
    <>
      <div className="columns my-3">
        <div className="column">
          <div className="notification is-primary">
            <button className="delete" onClick={handleReload}></button>
            <p className="has-text-centered">{message}</p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="buttons">
          <button
            className="button is-primary"
            onClick={createExercise("create-exercise")}
          >
            Create exercise
          </button>
          <button className="button is-danger">Not yet</button>
        </div>
      </div>
    </>
  );
};

export default LessonSuccess;
