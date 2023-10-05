import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["clicked", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Subjects",
    type: "primary",
    stateProp: "clicked",
    className: {},
  },
};
