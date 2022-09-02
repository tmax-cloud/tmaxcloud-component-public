import DatePicker_Custom from "./DatePicker_Custom";

export default {
  title: "Common/DatePicker_Custom",
  component: DatePicker_Custom,
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

const Template = (args) => <DatePicker_Custom {...args} />;

export const DatePicker_CustomTemplate = Template.bind({});

DatePicker_CustomTemplate.args = {};
