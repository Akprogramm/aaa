import React from "react";
import "./account.css";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Account = () => {

  return (
    <div>
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name - ExampleName</strong>
            </p>

            <p>
              <strong>Email - Example@email.com</strong>
            </p>

            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn"
            >
              <MdDashboard/>  
              Dashboard
            </button>

            <br />

            <br />

            <button
              className="common-btn"
              style={{ background: "red" }}
            >
              <IoMdLogOut/>  
              Logout
            </button>
          </div>
        </div>
    </div>
  );
};

export default Account;