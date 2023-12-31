import { TelegramFooter } from ".";

export default {
  title: "Components/TelegramFooter",
  component: TelegramFooter,
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
    propertyDefault: "/img/property-1-default-3.png",
  },
};
