import axiosInstance from "../../services/axios";
import { useState } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });

  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div
      class="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        class="card"
        style={{
          maxWidth: "500px",
          width: "90%",
          margin: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div
          class="card_title"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          <h1 style={{ color: "gray", fontSize: "20px" }}>Create Account</h1>
          <span style={{ color: "gray", fontSize: "16px" }}>
            Already have an account?{" "}
            <a
              href="login"
              style={{ color: "#007bff", textDecoration: "none" }}
              onClick={handleSignIn}
            >
              Sign In
            </a>
          </span>
        </div>
        <div class="form">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="firstName"
              id="fname"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="text"
              name="lastName"
              id="lname"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="text"
              name="userName"
              placeholder="(Optional) User Name"
              value={userData.userName}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <div
              className="div-radio-role"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="sub-div-radio">
                <label for="role_student" style={{ color: "gray" }}>
                  Student
                </label>{" "}
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
                <label for="role_admin" style={{ color: "gray" }}>
                  Administrator
                </label>{" "}
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
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div
          class="card_terms"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <input
            type="checkbox"
            name=""
            id="terms"
            style={{ marginRight: "10px" }}
          />{" "}
          <span style={{ color: "gray", fontSize: "14px" }}>
            I have read and agree to the{" "}
            <a href="" style={{ color: "#007bff", textDecoration: "none" }}>
              Terms of Service
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
