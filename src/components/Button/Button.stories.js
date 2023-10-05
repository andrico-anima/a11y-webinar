import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    stateProp: {
      options: ["disabled", "clicked", "hover", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    buttonLabel: "Button",
    stateProp: "disabled",
    type: "primary",
    size: "large",
    className: {},
    labelClassName: {},
  },
};
