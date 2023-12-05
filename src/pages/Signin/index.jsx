import "./signin.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:3000";
  const axiosInstance = axios.create({ baseURL });

  const [userData, updateUserData] = useState({
    userName: "",
    password: "",
  });

  //Connect to the backend
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    updateUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // using Axios
    await axiosInstance
      .post("/api/auth/signin", {
        email: userData.userName,
        password: userData.password,
      })
      .then((response) => {
        console.log(response);
        window.alert(response.data.status);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGetAll = async (e) => {
    e.preventDefault();

    const response = await axiosInstance.get("/api/users");
    console.log(response.data);
  };

  //console.log(users);

  return (
    <div className="login-container">
      <div className="login-container-wrapper clearfix">
        <div className="logo">
          <i className="fa fa-sign-in"></i>
        </div>
        <div className="welcome">
          <strong>Welcome,</strong> please login
        </div>

        <form onSubmit={handleSubmit} className="form-horizontal login-form">
          <div className="form-group relative">
            <input
              id="login_username"
              name="userName"
              className="form-control input-lg"
              type="email"
              placeholder="Username"
              required
              value={userData.userName}
              onChange={handleInputChange}
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="form-group relative password">
            <input
              id="login_password"
              name="password"
              className="form-control input-lg"
              type="password"
              placeholder="Password"
              required
              value={userData.password}
              onChange={handleInputChange}
            />
            <i className="fa fa-lock"></i>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">
              Login
            </button>
            <button className="btn btn-lg btn-block" onClick={handleGetAll}>
              Get All
            </button>
          </div>
          <div className="checkbox pull-left">
            <label>
              <input type="checkbox" /> Remember
            </label>
          </div>
          <div className="checkbox pull-right">
            <label>
              {" "}
              <a className="forget" href="" title="forget">
                Forgot your password
              </a>{" "}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}