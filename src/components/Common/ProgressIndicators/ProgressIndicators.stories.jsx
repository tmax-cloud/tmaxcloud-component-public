import ProgressIndicators from "./ProgressIndicators";

export default {
  title: "개발중/ProgressIndicator",
  component: ProgressIndicators,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Progress 는 데이터 로딩 시, 진행 상태를 표현하기 위해 사용된다.",
    docs: {
      description: {
        component: "Progress Bar는 추후 개발 예정",
      },
    },
  },
};

const Template = (args) => <ProgressIndicators {...args} />;

export const Throbber = Template.bind({});
