import DatePicker_Custom from "./DatePicker_Custom";

export default {
  title: "9월3주차/DatePicker_Custom",
  component: DatePicker_Custom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Date Picker를 호출하는 Field와 일, 월, 연도를 선택할 수 있는 Date Picker가 한 세트로 구성되는 컴포넌트이다.",
    docs: {
      description: {
        component: "현재 날짜 표시는 일 까지만 표시되고 월, 달은 미지원.",
      },
    },
  },
};

const Template = (args) => <DatePicker_Custom {...args} />;

export const DatePicker_CustomTemplate = Template.bind({});

DatePicker_CustomTemplate.args = { state: "Default" };
