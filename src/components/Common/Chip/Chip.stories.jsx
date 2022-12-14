import Chip from "./Chip";
import styled, { css } from "styled-components";
import { ReactComponent as dummy } from "Icon/dummy_icon.svg";

export default {
  title: "Common/Chip",
  component: Chip,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "선택, 콘텐츠 필터링 등에 사용할 수 있는 컴포넌트. 사용자의 입력값에 속성 및 액션이 필요한 경우, 입력값을 Chip으로 전환하여 부여 가능.",
  },
};

const Template = (args) => <Chip {...args} />;
const Icon = styled(dummy)`
  width: 1.45rem;
  height: 1.45rem;
`;
const Image = styled(dummy)`
  width: 2rem;
  height: 2rem;
`;
export const DefaultChipTemplate = Template.bind({});
DefaultChipTemplate.args = {
  state: "Default",
  text: "Default",
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const DefaultChipIconTemplate = Template.bind({});
DefaultChipIconTemplate.args = {
  state: "Default",
  text: "Default",
  icon: <Icon />,
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const DefaultChipImageTemplate = Template.bind({});
DefaultChipImageTemplate.args = {
  state: "Default",
  text: "Default",
  image: <Image />,
  handleCloseButton: () => console.log("handleCloseButton"),
};

export const InputChipTemplate = Template.bind({});

InputChipTemplate.args = {
  state: "Input",
  text: "Input",
  isCloseAble: true,
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const InputChipIconTemplate = Template.bind({});

InputChipIconTemplate.args = {
  state: "Input",
  text: "Input",
  isCloseAble: true,
  icon: <Icon />,
  handleCloseButton: () => console.log("handleCloseButton"),
};

export const InputChipImageTemplate = Template.bind({});

InputChipImageTemplate.args = {
  state: "Input",
  text: "Input",
  image: <Image />,
  isCloseAble: true,
  handleCloseButton: () => console.log("handleCloseButton"),
};

export const FilterChipTemplate = Template.bind({});

FilterChipTemplate.args = {
  state: "Filter",
  text: "Filter",
  isCloseAble: false,
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const FilterChipIconTemplate = Template.bind({});

FilterChipIconTemplate.args = {
  state: "Filter",
  text: "Filter",
  icon: <Icon />,
  isCloseAble: false,
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const FilterChipImageTemplate = Template.bind({});

FilterChipImageTemplate.args = {
  state: "Filter",
  text: "Filter",
  image: <Image />,
  isCloseAble: false,
  handleCloseButton: () => console.log("handleCloseButton"),
};
export const FilterChipCloseButtonTemplate = Template.bind({});

FilterChipCloseButtonTemplate.args = {
  state: "Filter",
  text: "Filter",
  isCloseAble: true,
  handleCloseButton: () => console.log("handleCloseButton"),
};
