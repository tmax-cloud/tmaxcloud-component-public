import Controller from "./Controller";

export default {
  title: "Common/Controller",
  component: Controller,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "객체 선택 및 옵션의 true / false 상태를 조절할 수 있는 세 가지의 컨트롤 모음이다.",
    docs: {
      description: {
        component:
          "상태 on/off의 Swtich (Toggle button) 및 객체 선택의 Radio button, Checkbox 총 세가지의 컨트롤을 제공한다. 설정이 복잡하여 우선 라이브러리를 활용하는 방법으로 구성. 추후 개선 예정.",
      },
    },
  },
};

const Template = (args) => <Controller {...args} />;

export const ControllerSwitchTemplate = Template.bind({});
ControllerSwitchTemplate.args = {
  state: "Switch",
  size: "default",
  text: "test",
  disabled: false,
  title: "title",
};
export const ControllerRadioTemplate = Template.bind({});
ControllerRadioTemplate.args = {
  state: "Radio",
  size: "default",
  text: "test",
  disabled: false,
};
export const ControllerCheckboxTemplate = Template.bind({});
ControllerCheckboxTemplate.args = {
  state: "Checkbox",
  size: "default",
  text: "test",
  disabled: false,
};
export const ControllerSpinnerTemplate = Template.bind({});
ControllerSpinnerTemplate.args = {
  state: "Spinner",
  size: "default",
  text: "test",
  disabled: false,
  number: 0,
  setNumber: (e) => {
    console.log("setNumber");
  },
};
