import { Twitter } from ".";

export default {
  title: "Components/Twitter",
  component: Twitter,
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
    twitterClassName: {},
    ellipse: "/img/ellipse-15.png",
    rectangle: "/img/rectangle-2960.png",
    img: "/img/rectangle-2961.png",
  },
};
