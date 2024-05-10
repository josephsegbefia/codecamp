/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import lessonService from "../../services/lesson.service";
import LessonContent from "./LessonContent";

const Lesson = () => {
  const { userId, courseId } = useParams();
  const [lesson, setLesson] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  console.log(userId, courseId);

  const limit = 1;

  const getLesson = () => {
    lessonService
      .getLessonLessons(userId, courseId, limit)
      .then((response) => {
        setLesson(response.data.lesson[0]);
        // console.log(lesson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLesson();
  }, [currentPage, courseId]);

  return (
    <div>
      {/* <div className="columns">
        <div className="column">
          <p className="title">Lesson</p>
        </div>
      </div> */}

      <div className="columns">
        <div
          className="column mr-4 is-one-third"
          style={{
            border: "1px solid grey",
            color: "white",
            textAlign: "justify"
          }}
        >
          <div className="scrollable-column">
            <LessonContent
              name={lesson.name}
              content={lesson.content}
              description={lesson.description}
              level={lesson.level}
            />
          </div>
        </div>
        <div className="column" style={{ border: "2px solid red" }}>
          <div className="scrollable-column">
            Exercise within code editor goes here
          </div>
          <div className="columns">
            <div
              className="column"
              style={{
                border: "1px solid green",
                marginTop: "30rem",
                height: "10rem"
              }}
            >
              Result of ran code goes here
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <nav className="navbar">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button is-danger">Back</button>
                  <button className="button is-primary">Next</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
