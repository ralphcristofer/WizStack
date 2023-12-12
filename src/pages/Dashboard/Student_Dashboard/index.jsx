import "./stu_dash_module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function StudentDashBoard() {
  const baseURL = "http://localhost:3000";
  const axiosInstance = axios.create({ baseURL });

  const [stuData, setStuData] = useState([]);

  const handleListAll = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.get("/api/users");
      console.log(response.data);
      const formattedData = response.data.map((row) => ({
        stu_id: row["_id"],
        stu_role: row["role"],
        stu_firstName: row["first_name"],
        stu_lastName: row["last_name"],
        stu_email: row["email"],
        stu_userName: row["user_name"],
        stu_courses: row["courses"],
      }));
      setStuData(formattedData);
      console.log(stuData);
    } catch (err) {
      console.error("Fail to fetch data", err);
    }
  };

  useEffect(() => {
    console.log(stuData);
  }, [stuData]);

  return (
    <div>
      <div className="header">
        <img
          src="http://www.discoverdollar.com/files/.Discover_Dollar_Logo_No_Name_Tiny_PNG-lw-scaled.png.png"
          height="50"
          width="50"
          alt="logo"
          //   style="float: left"
        />
        <h1>
          <a href="#">Studment Management System</a>
        </h1>
      </div>

      <div
        id="element1"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "10px",
          borderBottom: "1px solid #e2e2e2",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
          }}
        >
          <li style={{ float: "left" }}>
            <a
              className="active"
              href="#home"
              style={{
                display: "block",
                color: "black",
                textAlign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#solution" onClick={handleListAll}>
              Browse Your Courses
            </a>
          </li>
          <li>
            <a href="#contact">See Your TimeTable</a>
          </li>
          <li>
            <a href="#about">Update Your Profile</a>
          </li>
          <li>
            <a href="#blog">Browse Programs</a>
          </li>
        </ul>
      </div>

      <div className="dropdown" id="element2">
        <button className="dropbtn">
          <img
            src="https://cdn1.iconfinder.com/data/icons/jigsoar-icons/64/_dropdown.png"
            height="10"
            width="10"
            alt=""
          />
        </button>
        <div className="dropdown-content">
          <a href="#">You</a>
          <a href="#">Settings</a>
          <a href="#">Log out</a>
        </div>
      </div>

      <div className="for-middle-text">
        <div>
          <a href="#">
            <img
              src="https://lh6.googleusercontent.com/-1ol2nn3C74c/U-aMdNtlF2I/AAAAAAAAAXc/WjwIiqkHYn87mdgkUwYocQQdNFeng4lig/s577-no/DSC0221612.jpg"
              alt="Gopi"
              className="my_pic second-text"
              //   style="float: left"
            />
          </a>
          <h2>Gopal Krishna Sudhanshu</h2>
        </div>
        <div className="table_ th_td" style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "20px 0",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.9em",
              minWidth: "600px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <thead
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                textAlign: "center",
              }}
            >
              <tr className="th_td">
                <th style={{ padding: "12px 15px" }}>Student ID</th>
                <th style={{ padding: "12px 15px" }}>Role</th>
                <th style={{ padding: "12px 15px" }}>First Name</th>
                <th style={{ padding: "12px 15px" }}>Last Name</th>
                <th style={{ padding: "12px 15px" }}>Email</th>
                <th style={{ padding: "12px 15px" }}>User Name</th>
                <th style={{ padding: "12px 15px" }}>Courses</th>
              </tr>
            </thead>
            {stuData.map((student) => (
              <tr
                className="th_td"
                key={student._id}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderBottom: "1px solid #e2e2e2",
                  textAlign: "center",
                }}
              >
                <td style={{ padding: "12px 15px" }}>{student.stu_id}</td>
                <td style={{ padding: "12px 15px" }}>{student.stu_role}</td>
                <td style={{ padding: "12px 15px" }}>
                  {student.stu_firstName}
                </td>
                <td style={{ padding: "12px 15px" }}>{student.stu_lastName}</td>
                <td style={{ padding: "12px 15px" }}>{student.stu_email}</td>
                <td style={{ padding: "12px 15px" }}>{student.stu_userName}</td>
                <td style={{ padding: "12px 15px" }}>{student.stu_courses}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentDashBoard;