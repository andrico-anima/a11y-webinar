/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const MenuItem = ({ label = "Subjects", type, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    state: stateProp || "default",
  });

  return (
    <a href=""
      className={`menu-item ${state.state} ${state.type} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="subjects">{label}</div>
    </a>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
          type: "primary",
        };
    }
  }

  if (state.state === "hover" && state.type === "primary") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
          type: "primary",
        };

      case "click":
        return {
          state: "clicked",
          type: "primary",
        };
    }
  }

  if (state.state === "clicked" && state.type === "primary") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "primary",
        };
    }
  }

  if (state.state === "default" && state.type === "secondary") {
    switch (action) {
      case "click":
        return {
          state: "clicked",
          type: "secondary",
        };

      case "mouse_enter":
        return {
          state: "hover",
          type: "secondary",
        };
    }
  }

  if (state.state === "hover" && state.type === "secondary") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
          type: "secondary",
        };

      case "click":
        return {
          state: "clicked",
          type: "secondary",
        };
    }
  }

  if (state.state === "clicked" && state.type === "secondary") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "secondary",
        };
    }
  }

  return state;
}

MenuItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  stateProp: PropTypes.oneOf(["clicked", "hover", "default"]),
};
