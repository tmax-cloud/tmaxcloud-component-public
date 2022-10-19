import { Radio } from "./Radio";

export default {
  title: "개발중/Radio",
  component: Radio,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "객체 선택 및 옵션의 true / false 상태를 조절할 수 있는 세 가지의 컨트롤 모음이다.",
  },
};

const Template = (args) => <Radio {...args} />;

export const RadioTemplate = Template.bind({});
