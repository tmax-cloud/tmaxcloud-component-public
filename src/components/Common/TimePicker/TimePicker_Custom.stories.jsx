import TimePicker from "./TimePicker";

export default {
  title: "common/TimePicker",
  component: TimePicker,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Time Picker는 시간을 선택할 수 있는 컴포넌트이다. 미리 제시되는 set 내에서 시간을 입력하는 방식으로 적용된다. 오전/오후 및 시, 분을 선택할 수 있는 형태로 제공되며 텍스트 입력과 Time Selector, 두 가지 방법을 통해 입력할 수 있다.",
    docs: {
      description: {
        component: "keyboard navigation 추후 업데이트",
      },
    },
  },
};
const Template = (args) => <TimePicker {...args} />;

export const TimePickerTemplate = Template.bind({});

TimePickerTemplate.args = {};
