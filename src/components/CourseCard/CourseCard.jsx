/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconForButton } from "../../icons/IconForButton";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { UserImage } from "../UserImage";
import "./style.css";

export const CourseCard = ({
  teacherName = "John Doe",
  description = "Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries.",
  title = "Learn React",
  stateProp,
  type,
  className,
  image = "/img/image-11.png",
  img = "/img/image-13.png",
  userImageSizeSmallClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "highlighted",
  });

  return (
    <div
      className={`course-card type-${state.type} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.type === "default" && (
        <>
          <img className="image" alt="Image" src={state.state === "default" ? img : "/img/image-13.png"} />
          <div className="title-description">
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
          <div className="frame">
            <div className="user-info">
              <UserImage className={state.state === "default" ? userImageSizeSmallClassName : undefined} size="small" />
              <div className="user-details">
                <div className="text-wrapper-2">by</div>
                <div className="john-doe">{teacherName}</div>
              </div>
            </div>
            <Tag className="tag-instance" ratingNumber="4.8" type="rating" />
          </div>
        </>
      )}

      {state.state === "default" && state.type === "default" && (
        <Button
          buttonLabel="Go to Course"
          className="button-instance"
          size="large"
          stateProp="default"
          type="primary"
        />
      )}

      {state.type === "default" && state.state === "hover" && (
        <>
          <div className="frame-2">
            <Button
              buttonLabel="Go to Course"
              className="instance-node"
              size="large"
              stateProp="default"
              type="primary"
            />
            <div className="button-with-icon">
              <IconForButton className="icon-for-button" />
            </div>
          </div>
          <Tag category="Category" className="tag-2" type="category" />
          <Tag className="tag-3" numberOfLessons="20" type="lessons" />
        </>
      )}

      {state.type === "highlighted" && (
        <>
          <img className="img" alt="Image" src={image} />
          <div className={`course-details state-2-default`}>
            {state.state === "default" && <Tag category="Category" type="category" />}

            {state.state === "hover" && (
              <div className="div-2">
                <Tag category="Category" className="tag-4" type="category" />
                <Tag className="tag-4" numberOfLessons="20" type="lessons" />
                <Tag className="tag-4" ratingNumber="4.8" type="rating" />
              </div>
            )}

            <div className="course-info">
              <div className="headline-description">
                <div className="learn-react">{title}</div>
                <p className="p">{description}</p>
              </div>
              <div className="user-info-2">
                <UserImage size="small" />
                <div className="user-details">
                  <div className="text-wrapper-3">by</div>
                  <div className="john-doe-2">{teacherName}</div>
                </div>
              </div>
            </div>

            <Button
              buttonLabel="Go to Course"
              className="button-instance"
              size="large"
              stateProp="default"
              type="primary"
            />

          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

CourseCard.propTypes = {
  teacherName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  stateProp: PropTypes.oneOf(["hover", "default"]),
  type: PropTypes.oneOf(["highlighted", "default"]),
  image: PropTypes.string,
  img: PropTypes.string,
};
