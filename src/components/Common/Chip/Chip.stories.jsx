import Chip from "./Chip";

export default {
  title: "Common/Chip",
  component: Chip,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "선택, 콘텐츠 필터링 등에 사용할 수 있는 컴포넌트.",
    docs: {
      description: {
        component:
          "사용자의 입력값에 속성 및 액션이 필요한 경우, 입력값을 Chip으로 전환하여 부여 가능.",
      },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const ChipTemplate = Template.bind({});

ChipTemplate.args = {};
