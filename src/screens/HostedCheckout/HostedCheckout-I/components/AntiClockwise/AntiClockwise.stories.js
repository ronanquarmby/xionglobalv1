import { AntiClockwise } from ".";

export default {
  title: "Components/AntiClockwise",
  component: AntiClockwise,
  argTypes: {
    clock: {
      options: ["clock-4", "clock-2", "clock-3", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    clock: "clock-4",
    className: {},
  },
};
