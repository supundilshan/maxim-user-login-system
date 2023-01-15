import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

const DisplayAllsers = () => {
  const navigate = useNavigate();

  const [dbdata, getDbdata] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]); //Duplicate variable is for store data in "dbdata"

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
    console.log(SearchKey);

    // Filter data whle user types on search bar
    if (SearchKey == "") {
      // If user input is cleared return whole data
      getDbdata(duplicateData);
      console.log("didnt filtered");
    } else {
      // Filter database data using filter function and user input
      const filteredData = dbdata.filter((data) =>
        data.email_address.includes(SearchKey)
      );
      getDbdata(filteredData);

      console.log("filtered");
    }
  };

  const DisplayOneUer = (Email, Name) => {
    const User = {
      email: Email,
      name: Name,
    };
    navigate("/viewoneuser", { state: User });
  };

  const DeleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/user/${id}`)
      .then(() => {
        console.log("Deleting element sent to Server");
      })
      .catch((err) => {
        console.log(err);
      });
    // reload the current page after delete an element
    window.location.reload(false);
  };

  return (
    <div>
      <div className="table-container">
        <h1>Registered Users</h1>

        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search email"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Contact</th>
              <th colSpan={2}> View/Delete User</th>
            </tr>
          </thead>
          <tbody>
            {dbdata.map((dbdata, key) => {
              return (
                <tr className="data-table">
                  <td>
                    {dbdata.first_name} {dbdata.last_name}
                  </td>
                  <td>{dbdata.age}</td>
                  <td>{dbdata.gender}</td>
                  <td>{dbdata.email_address}</td>
                  <td>{dbdata.phone_number}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        DisplayOneUer(
                          dbdata.email_address,
                          dbdata.first_name + " " + dbdata.last_name
                        )
                      }
                    >
                      User Details
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DeleteUser(dbdata.id);
                      }}
                    >
                      Delete
                    </button>
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
