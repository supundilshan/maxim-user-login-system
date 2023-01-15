import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

const Normal_user_SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [fname, setFname] = useState(location.state.fname);
  const [lname, setLname] = useState(location.state.lname);
  const [birthday, setBirthday] = useState(location.state.birthday);
  const [age, setAge] = useState(location.state.age);
  const [gender, setGender] = useState(location.state.gender);
  const [email, setEmail] = useState(location.state.email);
  const [password1, setPassword1] = useState(location.state.password1);
  const [password2, setPassword2] = useState(location.state.password1);
  const [phone, setPhone] = useState(location.state.phone);

  const insertUserData = (e) => {
    e.preventDefault();
    const User_Object = {
      fname,
      lname,
      birthday,
      age,
      gender,
      email,
      password1,
      phone,
    };
    console.log(User_Object);

    axios
      .post("http://localhost:3001/user", User_Object)
      .then(() => {
        console.log("object send to back");
      })
      .catch((err) => {
        console.log(err);
      });

    navigate(`/login`);
  };

  return (
    <div className="signin">
      <div className="signin-container ">
        <h1 className="signin-title"> {location.state.title}</h1>

        <form onSubmit={insertUserData}>
          <div className="row">
            <div className="form-group col-sm">
              <label htmlFor="fname"> First Name: </label>
              <input
                required
                type="text"
                className="form-control"
                id="fname"
                placeholder="Enter first name"
                value={fname}
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />
            </div>

            <div className="form-group col-sm">
              <label htmlFor="lname"> Last Name: </label>
              <input
                required
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter last name"
                value={lname}
                onChange={(event) => {
                  setLname(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <label htmlFor="birthday">Birthday: </label>
              <input
                required
                type="date"
                className="form-control"
                id="birthday"
                value={birthday}
                onChange={(event) => {
                  setBirthday(event.target.value);
                }}
              />
            </div>

            <div className="form-group col">
              <label htmlFor="age"> Age: </label>
              <input
                required
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>

            <div className="form-group col-sm">
              <label htmlFor="gender">Gender: </label>
              <select
                required
                className="form-control"
                id="gender"
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <option value={"male"}>Male </option>
                <option value={"female"}>Female </option>
                <option value={"non"}>Not prefered</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address: </label>
            <input
              required
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
          <div className="row">
            <div className="form-group col-sm">
              <label htmlFor="password1">Password: </label>
              <input
                required
                type="password"
                className="form-control"
                id="password1"
                placeholder="Enter password"
                value={password1}
                onChange={(event) => {
                  setPassword1(event.target.value);
                }}
              />
            </div>

            <div className="form-group col-sm">
              <label htmlFor="password2">Confirm Password: </label>
              <input
                required
                type="password"
                className="form-control"
                id="password2"
                placeholder="Confirm password"
                value={password2}
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone: </label>
              <input
                required
                type="number"
                className="form-control"
                id="phone"
                placeholder="Eter a phone number"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "15px" }}
          >
            {location.state.title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Normal_user_SignIn;
