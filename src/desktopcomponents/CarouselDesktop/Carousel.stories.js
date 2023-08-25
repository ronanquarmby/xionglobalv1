import { Carousel } from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    slide: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    slide: "two",
    className: {},
    slidesBox: "/img/slides-box-1.png",
    slidesNavigationClassName: {},
  },
};
