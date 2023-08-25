import { CsButton } from ".";

export default {
  title: "Components/CsButton",
  component: CsButton,
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
  },
};
