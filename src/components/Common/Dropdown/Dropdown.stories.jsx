export default {
  title: "개발중/Dropdown",
  component: null,
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
        component: "추후 개선 예정",
      },
    },
  },
};

const Template = (args) => <div {...args} />;

export const tmpTemplate = Template.bind({});
