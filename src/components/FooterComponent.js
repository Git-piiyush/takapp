import React, { Component } from "react";
import { Navbar, NavItem } from "reactstrap";

import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isNavOpen: false,
    // };
    // this.toggleNav = this.toggleNav.bind(this);
  }

  render() {
    return (
      <div className="d-none fixed-bottom">
        <Navbar dark expand="md">
          <div className="container list-unstyled justify-content-around">
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span>
              </NavLink>
            </NavItem>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
