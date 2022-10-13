import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "버튼",
    docs: {},
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonTemplate = Template.bind({});

ButtonTemplate.args = {
  state: "PrimaryA",
  propSize: "XL",
  text: "이것은 템플릿 버튼",
  onClick: () => console.log("클릭 이벤트"),
};
