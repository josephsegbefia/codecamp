/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import courseService from "../../services/course.service";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ name, description, path, level, courseId }) => {
  const { isAdmin, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  let userId;
  if (user) {
    userId = user._id;
  }

  const enrol = (userId, courseId) => {
    setIsLoading(true);
    courseService
      .enrol(userId, courseId)
      .then((response) => {
        setIsLoading(false);
        navigate("/learning?page=dashboard");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <p className="mb-3">
            {path} | {level}
          </p>
          <p className="title is-size-6">{name}</p>
          <p>{description}</p>
        </div>
        {isAdmin ? (
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
            </p>
            <p
              className="card-footer-item has-text-danger"
              // onClick={()=> openDelete()}
            >
              <span>
                <i className="fa-solid fa-trash"></i>
              </span>
            </p>
          </footer>
        ) : (
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <p
                  className="title is-size-6 start-button"
                  onClick={() => enrol(userId, courseId)}
                >
                  {isLoading ? "Enroling" : "Start"}
                </p>
              </span>
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
