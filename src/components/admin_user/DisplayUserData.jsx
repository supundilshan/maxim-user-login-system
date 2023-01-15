import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { tab } from "@testing-library/user-event/dist/tab";

const DisplayUserData = () => {
  const [dbdata, getDBdata] = useState([]);

  const location = useLocation();
  const userEmail = location.state.email;
  const userName = location.state.name;
  //   const navigate = useNavigate();

  useEffect(() => {
    // Get the details of a user
    axios
      .get(`http://localhost:3001/user/${userEmail}`)
      .then((res) => {
        getDBdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{userName}</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>details</th>
          </tr>
        </thead>
        {dbdata.map((dbdata, key) => {
          return (
            <tbody className="data-table">
              <tr>
                <td>ID: </td> <td>{dbdata.id}</td>
              </tr>
              <tr>
                <td>First name:</td> <td>{dbdata.first_name}</td>
              </tr>
              <tr>
                <td>Last name:</td> <td>{dbdata.last_name}</td>
              </tr>
              <tr>
                <td>Date of Birth:</td> <td>{dbdata.date_of_birth}</td>
              </tr>
              <tr>
                <td>Age:</td> <td>{dbdata.age}</td>
              </tr>
              <tr>
                <td>Gender:</td> <td>{dbdata.gender}</td>
              </tr>
              <tr>
                <td>Email:</td> <td>{dbdata.email_address}</td>
              </tr>
              <tr>
                <td>Password:</td> <td>{dbdata.password}</td>
              </tr>
              <tr>
                <td>Phone:</td> <td>{dbdata.phone_number}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default DisplayUserData;
