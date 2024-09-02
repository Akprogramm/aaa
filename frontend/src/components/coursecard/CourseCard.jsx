import React from "react";
import "./courseCard.css";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
  const deleteHandler = async (id) => { 
  };

  return (
    <div className="course-card">
      <img src="https://cdn.elearningindustry.com/wp-content/uploads/2021/04/things-to-consider-when-choosing-an-online-course.png" alt="" className="course-image" />
      <h3>title</h3>
      <p>Instructor- name</p> 
      <p>Duration- 15:03:04</p>
                <button
                  onClick={() => navigate(`/course/study/id`)}
                  className="common-btn"
                >
                  Study
                </button>
        
      <br />
    </div>
  );
};

export default CourseCard;