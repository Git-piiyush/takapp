import React, { Component } from "react";
import { Navbar, NavItem } from "reactstrap";

import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar dark expand="md" color="white">
          <div
            className="container list-unstyled justify-content-around"
            style={{
              fontSize: "10px",
              marginTop: "-4px",
              marginBottom: "-4px",
            }}
          >
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <img
                  height="25"
                  width="25"
                  src="assets/images/home.png"
                  alt="Talk to astrologer"
                />
              </NavLink>
              <div style={{ marginTop: "-5px" }}>Home </div>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/talk" active>
                <img
                  height="25"
                  width="25"
                  src="assets/images/talk.png"
                  alt="Talk to astrologer"
                />
              </NavLink>
              <div style={{ marginTop: "-5px" }}>Talk to Astrologer</div>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link px-5" to="/">
                <img
                  height="25"
                  width="25"
                  src="assets/images/ask.png"
                  alt="Talk to astrologer"
                />
              </NavLink>
              <div style={{ marginTop: "-5px" }}>Ask Question</div>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <img
                  height="25"
                  width="25"
                  src="assets/images/reports.png"
                  alt="Reports"
                />
              </NavLink>
              <div style={{ marginTop: "-5px" }}>Reports</div>
            </NavItem>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
