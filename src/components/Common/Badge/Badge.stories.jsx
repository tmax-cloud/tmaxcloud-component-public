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
        component: "스펙 부족",
      },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const BadgeTemplate = Template.bind({});

Template.args = {
  state: "Default",
  size: "Xlarge",
  backgroundColor: "#ffffff",
  text: "1",
};
