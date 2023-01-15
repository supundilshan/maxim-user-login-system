import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //   const userEmail = location.state.email;
  const userEmail = "SAN@gmail.com";

  useEffect(() => {
    // Get the details of a user
    axios
      .get(`http://localhost:3001/user/${userEmail}`)
      .then((res) => {
        setId(res.data[0].id);
        setFname(res.data[0].first_name);
        setLname(res.data[0].last_name);
        setBirthday(res.data[0].date_of_birth);
        setAge(res.data[0].age);
        setGender(res.data[0].gender);
        setEmail(res.data[0].email_address);
        setPhone(res.data[0].phone_number);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUserData = (e) => {
    // e.preventDefault();
    const object = { fname, lname, birthday, age, gender, email, phone };
    axios
      .put(`http://localhost:3001/user/${id}`, object)
      .then(() => {
        console.log("Value Updated");
      })
      .catch((err) => {
        console.log(err);
      });

    // reload the current page after update
    window.location.reload(false);
  };

  return (
    <div>
      <h1>
        {fname} {lname}
      </h1>

      <form onSubmit={updateUserData}>
        <table className="data-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="fname"> First Name: </label>{" "}
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lname"> Last Name: </label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="birthday">Birthday: </label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age"> Age: </label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="gender">Gender: </label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email address: </label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">Phone: </label>
              </td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "15px" }}
        >
          EDIT
        </button>
      </form>
    </div>
  );
};

export default View;
