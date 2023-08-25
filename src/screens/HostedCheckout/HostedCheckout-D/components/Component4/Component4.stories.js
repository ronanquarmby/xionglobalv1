import { Component4 } from ".";

export default {
  title: "Components/Component4",
  component: Component4,
  argTypes: {
    property1: {
      options: ["variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-3",
    className: {},
    group: "/img/group-705-2.png",
  },
};
