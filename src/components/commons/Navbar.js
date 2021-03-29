import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestionCircle, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className="logo"></div>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className="bars" size="lg" />
          </button>
          <div className="navbar-collapse collapse text-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link mx-2" to="/">
                  <FontAwesomeIcon icon={faHome} /> Beranda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link mx-2" to="/faq">
                  <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link mx-2" to="/hotline">
                  <FontAwesomeIcon icon={faPhone} /> Hotline
                </NavLink>
              </li>
            </ul>
            <div className="dropdown-divider"></div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="darkSwitch" />
                  <label className="custom-control-label" htmlFor="darkSwitch">
                    Dark Mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
