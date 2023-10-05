import { CourseCard } from ".";

export default {
  title: "Components/CourseCard",
  component: CourseCard,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["highlighted", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    teacherName: "John Doe",
    description:
      "Build powerful interactive applications with React, a popular JavaScript library.In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries.",
    title: "Learn React",
    stateProp: "hover",
    type: "highlighted",
    className: {},
    image: "/img/image-11.png",
    img: "/img/image-13.png",
    userImageSizeSmallClassName: {},
  },
};
