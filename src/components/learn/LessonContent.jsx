/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LessonContent = ({ name, description, level, content }) => {
  return (
    <div>
      <p className="title is-size-5">{name}</p>
      <p className="is-size-7">Difficulty: {level}</p>
      <hr />
      <p className="title is-size-5">{description}</p>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: content }} />
      <hr />
    </div>
  );
};

export default LessonContent;
