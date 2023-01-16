import { DatePicker_Custom } from "./DatePicker_Custom";

export default {
  title: "Common/DatePicker_Custom",
  component: DatePicker_Custom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Date Picker를 호출하는 Field와 일, 월, 연도를 선택할 수 있는 Date Picker가 한 세트로 구성되는 컴포넌트이다.",
  },
};

const Template = (args) => <DatePicker_Custom {...args} />;

export const DatePicker_CustomTemplate = Template.bind({});

DatePicker_CustomTemplate.args = {
  state: "Default",
  onChange: (e) => console.log(e),
};
