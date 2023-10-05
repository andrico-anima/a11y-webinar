/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ buttonLabel = "Button", stateProp, type, size, className, labelClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "primary",
    size: size || "large",
  });

  return (
    <div
      className={`button state-0-${state.state} ${state.size} type-0-${state.type} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`label ${labelClassName}`}>{buttonLabel}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "large" && state.state === "default" && state.type === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "large",
          state: "hover",
          type: "primary",
        };
    }
  }

  if (state.size === "large" && state.state === "hover" && state.type === "primary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (state.size === "small" && state.state === "default" && state.type === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "small",
          state: "hover",
          type: "primary",
        };
    }
  }

  if (state.size === "small" && state.state === "hover" && state.type === "primary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (state.size === "large" && state.state === "default" && state.type === "secondary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "large",
          state: "hover",
          type: "secondary",
        };
    }
  }

  if (state.size === "large" && state.state === "hover" && state.type === "secondary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (state.size === "small" && state.state === "default" && state.type === "secondary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "small",
          state: "hover",
          type: "secondary",
        };
    }
  }

  if (state.size === "small" && state.state === "hover" && state.type === "secondary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (state.size === "large" && state.state === "default" && state.type === "tertiary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "large",
          state: "hover",
          type: "tertiary",
        };
    }
  }

  if (state.size === "large" && state.state === "hover" && state.type === "tertiary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "large",
          state: "default",
          type: "tertiary",
        };

      case "click":
        return {
          size: "large",
          state: "clicked",
          type: "tertiary",
        };
    }
  }

  if (state.size === "small" && state.state === "default" && state.type === "tertiary") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "small",
          state: "hover",
          type: "tertiary",
        };
    }
  }

  if (state.size === "small" && state.state === "hover" && state.type === "tertiary") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "small",
          state: "default",
          type: "tertiary",
        };

      case "click":
        return {
          size: "small",
          state: "clicked",
          type: "tertiary",
        };
    }
  }

  if (state.size === "large" && state.state === "clicked" && state.type === "tertiary") {
    switch (action) {
      case "click":
        return {
          size: "large",
          state: "default",
          type: "tertiary",
        };
    }
  }

  if (state.size === "small" && state.state === "clicked" && state.type === "tertiary") {
    switch (action) {
      case "click":
        return {
          size: "small",
          state: "default",
          type: "tertiary",
        };
    }
  }

  return state;
}

Button.propTypes = {
  buttonLabel: PropTypes.string,
  stateProp: PropTypes.oneOf(["disabled", "clicked", "hover", "default"]),
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["large", "small"]),
};
