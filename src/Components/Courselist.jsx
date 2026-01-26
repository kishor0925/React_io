import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import Course from "./Course";

function Courselist() {
  const courses = [
    {
      name : "Html 5",
      img: html,
      content: "Html 5 course for Beginners ",
      price : 200,
    },
    {
      name: "CSS 3",
      img: css,
      content: "CSS 3 course for Beginners to master",
      price : 399
     
    },
    {
      name: "Javascript",
      img: js,
      content: "Javascript course for beginners ",
      price : 499
      
    },
    {
      name: "React js",
      img: react,
      content: "React js course for beginners ",
      price : 999
     
    },
  ];

  const courseslist = courses.map((course, index) => (
    <Course
      key={index}
      name={course.name}
      content={course.content}
      price = {course.price}
      img={course.img}
    />
  ));

  return <>{courseslist}</>;
}

export default Courselist;
