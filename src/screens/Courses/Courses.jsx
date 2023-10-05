import React from "react";
import { Button } from "../../components/Button";
import { CourseCard } from "../../components/CourseCard";
import { MenuItem, MenuItemHeader } from "../../components/MenuItem";
import { NavigationBar } from "../../components/NavigationBar";
import "./style.css";

export const Courses = () => {
  return (
    <div className="courses" data-tokens-mode="dark">
      <NavigationBar
        className="design-component-instance-node"
        logo="/img/logo.svg"
        menuItemStateProp="clicked"
        property1="default"
      />
      <div className="page-content">
        <div className="side-menu">
          <div className="div-3">
            <MenuItemHeader className="menu-item-2" label="Courses" stateProp="default" type="primary" />
            <div className="menu-list">
              <MenuItem className="menu-item-3" label="All Courses" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Recommended" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="New Courses" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Top Rated" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Popular Courses" stateProp="default" type="secondary" />
            </div>
          </div>
          <div className="div-4">
            <MenuItemHeader className="menu-item-2" label="Subjects" stateProp="default" type="primary" />
            <div className="menu-list">
              <MenuItem className="menu-item-4" label="AI" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Computer Science" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Machine Learning" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Web Development" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Web Design" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Mobile Development" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Game Development" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Cybersecurity" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="DevOps" stateProp="default" type="secondary" />
            </div>
          </div>
          <div className="div-4">
            <MenuItemHeader className="menu-item-2" label="Languages" stateProp="default" type="primary" />
            <div className="menu-list">
              <MenuItem className="menu-item-3" label="HTML" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="CSS" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="JavaScript" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="TypeScript" stateProp="default" type="secondary" />
              <MenuItem className="menu-item-3" label="Tailwind" stateProp="default" type="secondary" />
            </div>
          </div>
          <div className="upgrade-your">
            <MenuItemHeader className="menu-item-2" label="Update your interests" stateProp="default" type="primary" />
            <Button
              buttonLabel="Go to Dashboard"
              className="button-2"
              labelClassName="button-3"
              size="large"
              stateProp="default"
              type="secondary"
            />
          </div>
        </div>
        <div className="page-content-2" id="main-content">
          <CourseCard
            className="design-component-instance-node"
            description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
            image="/img/image-10.png"
            stateProp="default"
            teacherName="John Doe"
            title="Learn React"
            type="highlighted"
          />
          <div className="text-wrapper-4">Featured Courses</div>
          <div className="cards-row">
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-3.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-2.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-2"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-1.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-3"
            />
          </div>
          <div className="text-wrapper-4">Top Rated</div>
          <div className="cards-row">
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-3.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-2.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-2"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-1.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-3"
            />
          </div>
          <div className="text-wrapper-4">New &amp; Noteworthy</div>
          <div className="cards-row">
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-3.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-2.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-2"
            />
            <CourseCard
              className="course-card-instance"
              description="Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries."
              img="/img/image-1.png"
              stateProp="default"
              teacherName="John Doe"
              title="Learn React"
              type="default"
              userImageSizeSmallClassName="course-card-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
