import TimePicker from "./TimePicker";
import TimePicker_Custom from "./TimePicker_Custom";

export default {
  title: "개발중/TimePicker_Custom",
  component: TimePicker_Custom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Time Picker는 시간을 선택할 수 있는 컴포넌트이다. 미리 제시되는 set 내에서 시간을 입력하는 방식으로 적용된다. 오전/오후 및 시, 분을 선택할 수 있는 형태로 제공되며 텍스트 입력과 Time Selector, 두 가지 방법을 통해 입력할 수 있다.",
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
