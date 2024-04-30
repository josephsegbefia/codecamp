/* eslint-disable no-unused-vars */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CreateResource from './CreateResource'

const resources = [
  {name: "Course/Program", path: "create-course"},
  {name: "Lesson", path: "create-lesson"},
  {name: "Exercise", path: "create-exercise"},
  {name: "Solution", path: "create-solution"}
]
const Create = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page')

  const gotoPage = (path) => {
    setSearchParams({ page: path });
  }

  return (
    <div className = "columns">
      {
        resources.map((resource, index) => (
          <div key = {index} className = "column">
            <CreateResource title = {resource.name} path = {resource.path} gotoPage = {gotoPage} />
          </div>
        ))
      }

    </div>
  )
}

export default Create
