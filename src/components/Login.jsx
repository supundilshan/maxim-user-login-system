import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateUser = async (e) => {
    e.preventDefault();
    const Auth_Object = { email, password };
    let Login_state, login_email, login_user_type;
    axios
      .post(`http://localhost:3001/authuser`, Auth_Object)
      .then((res) => {
        Login_state = res.data.Login_Success;
        login_email = res.data.email;
        login_user_type = res.data.userType;
        console.log(`${Login_state} ${login_email}  ${login_user_type}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        if (
          Login_state == false &&
          login_email == null &&
          login_user_type == null
        ) {
          console.log("cant logged in");
        } else if (login_user_type == "A") {
          navigate(`/viewalluser`);
        } else if (login_user_type == "G") {
          navigate(`/view`);
        } else {
          console.log("Cant logged in:unexpected Error");
        }
      });
  };

  return (
    <div className="signin">
      <div className="login-container">
        <h1 className="login-title">LOGIN</h1>
        <form onSubmit={authenticateUser}>
          <div className="form-group">
            <label htmlFor="email">Email address: </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
