import { Tag } from ".";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    type: {
      options: ["category", "rating", "lessons"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    category: "Category",
    ratingNumber: "4.8",
    numberOfLessons: "20",
    type: "category",
    className: {},
  },
};
