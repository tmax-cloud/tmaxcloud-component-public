import { Dropdown } from "./Dropdown";

export default {
  title: "개발중/Dropdown",
  component: Dropdown,
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "",
    docs: {
      description: {
        component: "추후 개발 예정",
      },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const tmpTemplate = Template.bind({});
tmpTemplate.args = {
  state: "Default",
};
