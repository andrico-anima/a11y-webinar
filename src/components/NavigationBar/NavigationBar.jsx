/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MenuItem } from "../MenuItem";
import "./style.css";

export const NavigationBar = ({ property1, className, logo = "/img/logo-1.svg", menuItemStateProp = "default" }) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <img className="logo" alt="Logo" src={logo} />
      <div className="menu-items">
        <MenuItem className="menu-item-instance" label="Courses" stateProp={menuItemStateProp} type="primary" />
        <MenuItem className="menu-item-instance" label="Dashboard" stateProp="default" type="primary" />
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  logo: PropTypes.string,
  menuItemStateProp: PropTypes.string,
};
