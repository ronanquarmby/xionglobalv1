import { Carousel } from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    slide: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
    mobile: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    slide: "two",
    mobile: "default",
    className: {},
    slidesBoxClassName: {},
    slidesBox: "/img/slides-box-9.png",
    slidesNavigationClassName: {},
  },
};
