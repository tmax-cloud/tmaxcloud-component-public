import Tooltip from "./Tooltip";

export default {
  title: "개발중/tooltip",
  component: Tooltip,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Tooltip은 오브젝트 위로 마우스 오버하거나 포커스되었을 경우 호출하는 부가 설명 메시지이다.",
  },
};

const Template = (args) => <Tooltip {...args} />;

export const TooltipTemplate = Template.bind({});

TooltipTemplate.args = {};
