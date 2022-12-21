import { IconWrapper } from "./IconWrapper";
import { ReactComponent as ArrowDownIcon } from "Icon/arrow/arrow/down/Small.svg";

export default {
  title: "12월 4주/IconWrapper",
  component: IconWrapper,
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "아이콘 수정용 컴포넌트",
  },
};

const Template = (args) => <IconWrapper {...args} />;

export const defaultTemplate = Template.bind({});

defaultTemplate.args = {
  width: "30px",
  height: "30px",
  color: "blue",
  children: <ArrowDownIcon />,
};
