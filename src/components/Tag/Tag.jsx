/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconForTag10 } from "../../icons/IconForTag10";
import { IconForTag2 } from "../../icons/IconForTag2";
import "./style.css";

export const Tag = ({ category = "Category", ratingNumber = "4.8", numberOfLessons = "20", type, className }) => {
  return (
    <div className={`tag ${type} ${className}`}>
      {type === "category" && <div className="text-wrapper">{category}</div>}

      {type === "lessons" && (
        <>
          <IconForTag10 className="icon-for-tag" />
          <div className="lesson-number">
            <div className="div">{numberOfLessons}</div>
            <div className="div">Lessons</div>
          </div>
        </>
      )}

      {type === "rating" && (
        <>
          <IconForTag2 className="icon-for-tag-2" />
          <div className="element">{ratingNumber}</div>
        </>
      )}
    </div>
  );
};

Tag.propTypes = {
  category: PropTypes.string,
  ratingNumber: PropTypes.string,
  numberOfLessons: PropTypes.string,
  type: PropTypes.oneOf(["category", "rating", "lessons"]),
};
