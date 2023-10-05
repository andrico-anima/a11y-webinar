/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const MenuItemHeader = ({ label = "Subjects", type, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    state: stateProp || "default",
  });

  return (
    <div
      className={`menu-item ${state.state} ${state.type} ${className}`}
    >
      <div className="subjects">{label}</div>
    </div>
  );
};

function reducer(state, action) {
  return state;
}

