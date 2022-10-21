import { Radio } from "./Radio";

export default {
  title: "개발중/Radio",
  component: Radio,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "추후 확장성을 고려하여 개발 예정",
  },
};

const Template = (args) => <Radio {...args} />;

export const RadioTemplate = Template.bind({});
