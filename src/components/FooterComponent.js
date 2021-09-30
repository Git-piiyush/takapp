import React, { Component } from "react";
import { Navbar, NavItem } from "reactstrap";

import { NavLink, Link } from "react-router-dom";


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
              <NavLink className="nav-link" to="/home" >
                <img
                  height="25"
                  width="25"
                  src="images/home.png"
                  alt="Talk to astrologer"
                />
                <div className="a-link">Home</div>
              </NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/talk" active>
                <img
                  height="25"
                  width="25"
                  src="images/talk.png"
                  alt="Talk to astrologer"
                /> 
                <div className="a-link color-link">Talk to Astrologer</div>
              </NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" exact  to="/" activeClassName="main-nav-active">
                <img
                  height="25"
                  width="25"
                  src="images/ask.png"
                  alt="Talk to astrologer"
                />
                <div className="a-link">Ask Question</div>
              </NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <img
                  height="25"
                  width="25"
                  src="images/reports.png"
                  alt="Reports"
                />
                <div className="a-link">Reports</div>
              </NavLink>
              

            </NavItem>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
