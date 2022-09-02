import Badge from "./Badge";

export default {
  title: "Common/Badge",
  component: Badge,
  argTypes: { backgroundColor: { control: "color" } },
  decorators: [],
  parameters: {
    componentSubtitle:
      "확인해야 할 새로운 것이 있음을 알려주는 역할의 컴포넌트",
    docs: {
      description: {
        component: "Spec & Size 부족. 추후 개선 예정",
      },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const BadgeTemplate = Template.bind({});

BadgeTemplate.args = {
  state: "Default",
  size: "Xlarge",
  backgroundColor: "#000000",
  text: "1",
};
