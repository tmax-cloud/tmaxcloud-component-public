import TimePicker from "./TimePicker";
import TimePicker_Custom from "./TimePicker_Custom";

export default {
  title: "개발중/TimePicker_Custom",
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

const TimePickerTemplate = (args) => <TimePicker {...args} />;

export const TimePickerTemplateTest = TimePickerTemplate.bind({});

TimePickerTemplateTest.args = {};
