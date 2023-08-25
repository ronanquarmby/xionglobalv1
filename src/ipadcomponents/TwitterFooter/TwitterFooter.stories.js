import { TwitterFooter } from ".";

export default {
  title: "Components/TwitterFooter",
  component: TwitterFooter,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    propertyDefault: "/img/property-1-default-2.png",
  },
};
