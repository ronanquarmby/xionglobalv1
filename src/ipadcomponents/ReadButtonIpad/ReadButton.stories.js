import { ReadButton } from ".";

export default {
  title: "Components/ReadButton",
  component: ReadButton,
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
    divClassName: {},
  },
};
