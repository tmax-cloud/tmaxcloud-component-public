import { SBTooltipCustom } from "./TooltipCustom";

export default {
  title: "common/Tooltip",
  component: SBTooltipCustom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Tooltip은 오브젝트 위로 마우스 오버하거나 포커스되었을 경우 호출하는 부가 설명 메시지이다.",
  },
};

const Template = (args) => <SBTooltipCustom {...args} />;

export const TooltipTemplate = Template.bind({});

TooltipTemplate.args = {
  title: "test",
  placement: "bottom",
  trigger: "hover",
};
