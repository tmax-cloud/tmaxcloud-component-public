import TimePicker_Custom from "./TimePicker_Custom";

export default {
  title: "Common/TimePicker_Custom",
  component: TimePicker_Custom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Template = (args) => <TimePicker_Custom {...args} />;

export const TimePicker_CustomTemplate = Template.bind({});

TimePicker_CustomTemplate.args = {};
