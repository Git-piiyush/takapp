import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar className="fixed-top list-unstyled" color="white" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className="toogler" />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="images/logo.png"
                height="35"
                width="45"
                alt="Tak app"
              />
            </NavbarBrand>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="images/profile.png"
                height="30"
                width="30"
                alt="profile"
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <img
                      height="15"
                      width="15"
                      src="images/home.png"
                      alt="Talk to astrologer"
                    />{" "}
                    <span style={{ marginLeft: "8px", color: "black" }}>
                      Home
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/talk">
                    <img
                      height="15"
                      width="15"
                      src="images/talk.png"
                      alt="Talk to astrologer"
                    />
                    <span style={{ marginLeft: "8px", color: "black" }}>
                      Talk to astrologer
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <img
                      height="15"
                      width="15"
                      src="images/ask.png"
                      alt="Talk to astrologer"
                    />
                    <span style={{ marginLeft: "8px", color: "black" }}>
                      Ask Questions
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <img
                      height="15"
                      width="15"
                      src="images/reports.png"
                      alt="Talk to astrologer"
                    />
                    <span style={{ marginLeft: "8px", color: "black" }}>
                      Reports
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
