import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
// import { UserData } from "../../context/UserContext";

const Register = () => {

  // const { Register } = UserData(); 

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   await Register(name, email, password, navigate); 
  // };  

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
          />

          <button type="submit" className="common-btn">
            Register
          </button>
        </form>
        <p>
          have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
