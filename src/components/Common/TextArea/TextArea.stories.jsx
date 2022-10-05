import TextArea from "./TextArea";

export default {
  title: "common/TextArea",
  component: TextArea,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Text Area는 정보를 기입 및 수정을 할 수 있는 영역이다. 보통은 수정 메뉴 진입 시 활성화 되는 경우가 다분하다.",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const TextAreaTemplate = Template.bind({});

TextAreaTemplate.args = {
  onChange: (e) => console.log(e.target.value),
  error: false,
  errorMessage: "Error Message",
  disabled: false,
};
