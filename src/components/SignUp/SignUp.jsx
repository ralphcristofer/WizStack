import "./signup.css";
import axios from "axios";
import { useState } from "react";
import React from "react";

function SignUp() {
  const baseURL = "http://localhost:3000";
  const axiosInstance = axios.create({ baseURL });

  const [userData, updateUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    role: "student",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    updateUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axiosInstance
      .post("/api/auth/signup", {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        passwordConfirm: userData.confirmPassword,
        user_name: userData.userName,
        role: userData.role,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="container">
      <div class="card">
        <div class="card_title">
          <h1>Create Account</h1>
          <span>
            Already have an account? <a href="login">Sign In</a>
          </span>
        </div>
        <div class="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              id="fname"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              id="lname"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="userName"
              placehoder="(Optional) User Name"
              value={userData.userName}
              onChange={handleInputChange}
            />
            <div className="div-radio-role">
              <div className="sub-div-radio">
                <label for="role_student">Student</label>{" "}
                <input
                  type="radio"
                  name="role"
                  value="student"
                  id="role_student"
                  checked={userData.role === "student"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sub-div-radio">
                <label for="role_admin">Administrator</label>{" "}
                <input
                  type="radio"
                  name="role"
                  value="administrator"
                  id="role_admin"
                  checked={userData.role === "administrator"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div class="card_terms">
          <input type="checkbox" name="" id="terms" />{" "}
          <span>
            I have read and agree to the <a href="">Terms of Service</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
