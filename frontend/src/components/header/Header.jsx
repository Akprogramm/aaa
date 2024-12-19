import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import imgg from "../../assets/imgg.png"



const Header = ({ isAuth }) => {

  const nav = () => {
    window.location.href = "https://glistening-caramel-7d6a3c.netlify.app/";
  } 

  return (
    <header>
      <div className="logo">SkillAcademy</div>
      {/* <div className="postt" onClick={nav}>Ask AI <img src={imgg} alt="" /></div> */}

      <div className="link">
      <div className="postt" onClick={nav}>Ask AI <img src={imgg} alt="" /></div>
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (       
          <Link to={"/account"}>Account</Link>
        ) : (                                                    
          <Link to={"/login"}>Login</Link>
        )}
      </div> 
    </header> 
  );
};

export default Header; 