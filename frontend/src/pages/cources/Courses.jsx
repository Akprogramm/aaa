import React from "react";
import "./courses.css";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container"> 
        <CourseCard />
        <CourseCard/>
        <CourseCard/>
        <CourseCard />
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  );
};

export default Courses;