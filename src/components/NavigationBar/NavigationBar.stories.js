import { NavigationBar } from ".";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    logo: "/img/logo-1.svg",
    menuItemStateProp: "default",
  },
};
