import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

const DisplayAllsers = () => {
  const navigate = useNavigate();

  const [dbdata, getDbdata] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);

  // Get Data fromDatabase
  useEffect(() => {
    axios
      .get("http://localhost:3001/alluser")
      .then((res) => {
        getDbdata(res.data);
        setDuplicateData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (SearchKey) => {
    if (SearchKey == "") {
      getDbdata(duplicateData);
    } else {
      const filteredCars = dbdata.filter((data) =>
        data.email.includes(SearchKey)
      );

      getDbdata(filteredCars);
    }
  };

  return (
    <div>
      <div className="table-container">
        <h1>Registered Users</h1>

        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>User Type</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dbdata.map((dbdata, key) => {
              return (
                <tr className="data-table">
                  <td>{dbdata.id}</td>
                  <td>{dbdata.email}</td>
                  <td>{dbdata.user_type}</td>
                  <td>
                    <button className="btn btn-primary">User Details</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayAllsers;
