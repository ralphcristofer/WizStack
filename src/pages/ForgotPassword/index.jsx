import { themeGrayColorsGrouped } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:3000";
  const axiosInstance = axios.create({ baseURL });

  const [userData, updateUserData] = useState({
    email: "",
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

    try {
      const response = await axiosInstance.post("/api/auth/forgotPassword", {
        email: userData.email,
      });
      console.log(response);
      navigate("/reset_password");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#333" }}>Forgot your password?</h2>
      <hr style={{ margin: "20px 0", borderColor: "#ddd" }}></hr>
      <h3 style={{ color: "#666" }}>
        Enter your email address to reset your password
      </h3>

      <form
        action="index.html"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          for="mail"
          style={{ marginBottom: "10px", fontSize: "16px", color: "#333" }}
        >
          Email
        </label>
        <input
          type="email"
          id="name"
          name="email"
          value={userData.email}
          placeholder="Enter your email address"
          required
          onChange={handleInputChange}
          style={{
            fontSize: "16px",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
