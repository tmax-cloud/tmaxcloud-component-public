import Badge from "./Badge";

export default {
  title: "11월 2주차/Badge",
  component: Badge,
  argTypes: { backgroundColor: { control: "color" } },
  decorators: [],
  parameters: {
    componentSubtitle:
      "확인해야 할 새로운 것이 있음을 알려주는 역할의 컴포넌트",
    docs: {
      description: {
        component: "디자인 나오면 업데이트 예정",
      },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const BadgeTemplate = Template.bind({});

BadgeTemplate.args = {
  state: "Default",
  backgroundColor: "#f44336",
  text: "1",
};
