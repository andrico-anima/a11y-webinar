import { UserImage } from ".";

export default {
  title: "Components/UserImage",
  component: UserImage,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
