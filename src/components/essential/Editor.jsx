/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "../../assets/styles.scss";

export const Editor = () => {
  const [content, setContent] = useState("");
  // const handleChange = (value) => {
  //   setState({ value });
  // };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(value) => setContent(value)}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
