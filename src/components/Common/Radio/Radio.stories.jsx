import { Radio, SBRadio } from "./Radio";

export default {
  title: "Common/Radio",
  component: Radio,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "추후 확장성을 고려하여 개발 예정",
  },
};

const Template = (args) => <SBRadio {...args} />;

export const SBRadioTemplate = Template.bind({});
