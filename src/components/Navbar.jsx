import React, { useState, useEffect } from "react";

const Navbar = () => {
  //   const [userEmail, setuserEmail] = useState("");

  //   useEffect(() => {
  //     setuserEmail(localStorage.getItem("email"));
  //     console.log("nav bar");
  //   }, []);

  const LogoutUser = () => {
    localStorage.setItem("email", "");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: "60px", backgroundColor: "rgb(141,195,231)" }}
      >
        <div className="row" style={{ marginTop: "auto", marginLeft: "1%" }}>
          <div className="col">
            <a className="navbar-brand" href="/" style={{ color: "black" }}>
              MAXIM
            </a>
          </div>
          <div className="col">
            <a className="navbar-brand" href="/" style={{ color: "black" }}>
              <button className="btn btn-outline-danger" onClick={LogoutUser}>
                Logout
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
