import Throbber from "./Throbber";

export default {
  title: "Common/Throbber",
  component: Throbber,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Progress 는 데이터 로딩 시, 진행 상태를 표현하기 위해 사용된다.",
  },
};

const Template = (args) => <Throbber {...args} />;

export const ThrobberTemplate = Template.bind({});

ThrobberTemplate.argTypes = {
  isActive: false,
};
