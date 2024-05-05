/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const CourseCard = ({ name, description, path, level }) => {
  const { isAdmin } = useContext(AuthContext);
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
                <p className="title is-size-6 start-button">Start</p>
              </span>
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
