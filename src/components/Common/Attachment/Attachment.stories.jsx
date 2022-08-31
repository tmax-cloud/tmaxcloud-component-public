import Attacthment from "./Attachment";

export default {
  title: "Common/Attachment",
  component: Attacthment,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "첨부파일의 확장자 및 정보를 나타내는 컴포넌트",
    docs: {
      description: {
        component: "Attachment",
      },
    },
  },
};

const Template = (args) => <Attacthment {...args} />;

export const AttachmentTemplate = Template.bind({});

AttachmentTemplate.args = {
  state: "Medium",
  name: "Attachment.png",
  size: "80KB",
};
