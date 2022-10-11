import Attachment from "./Attachment";

export default {
  title: "common/Attachment",
  component: Attachment,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "첨부파일의 확장자 및 정보를 나타내는 컴포넌트.",
  },
};

const Template = (args) => <Attachment {...args} />;

export const AttachmentTemplate = Template.bind({});

AttachmentTemplate.args = {
  state: "Large",
  name: "Attachment.png",
  size: "80KB",
};
