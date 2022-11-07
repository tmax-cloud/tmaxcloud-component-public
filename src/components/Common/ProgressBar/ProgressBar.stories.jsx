import { ProgressBar } from "./ProgressBar";

export default {
  title: "개발중/ProgressBar",
  component: ProgressBar,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "ProgressBar 는 데이터 로딩 시, 진행 상태를 표현하기 위해 사용된다.",
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const ProgressBarTemplate = Template.bind({});

ProgressBarTemplate.args = {};
