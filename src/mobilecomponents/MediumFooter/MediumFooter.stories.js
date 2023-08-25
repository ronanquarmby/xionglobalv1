import { MediumFooter } from ".";

export default {
  title: "Components/MediumFooter",
  component: MediumFooter,
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
    propertyDefault: "/img/property-1-default-6.png",
  },
};
