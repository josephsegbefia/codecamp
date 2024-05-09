/* eslint-disable no-unused-vars */
import React from "react";
// import CourseC from "../NavComponents/CourseCatalog";
import Courses from "../NavComponents/Courses";
import Resources from "../NavComponents/Resources";
import Blog from "../NavComponents/Blog";
import LearningTips from "../NavComponents/LearningTips";
import Pricing from "../NavComponents/Pricing";

const Routes = () => {
  const routes = [
    {
      name: "Course Catalog",
      url: "/courses",
      component: Courses
    },
    {
      name: "Resources",
      url: "/resources",
      exact: true,
      component: Resources,
      subnav: [
        {
          name: "Blog",
          url: "/blog",
          component: Blog
        },
        {
          name: "Learning Tips",
          url: "/learningtips",
          component: LearningTips
        }
      ]
    },
    {
      name: "Pricing",
      url: "/pricing",
      component: Pricing
    }
  ];

  return routes;
};

export default Routes;
