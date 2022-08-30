import React from "react";

import InputBox from "./InputBox";

export default {
  title: "Common/InputBox",
  component: InputBox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "문자, 숫자, 기호 등을 입력할 수 있는 컴포넌트",
    docs: {
      description: {
        component: "Input Box",
      },
    },
  },
};

const Template = (args) => <InputBox {...args} />;

export const InputBoxTemplate = Template.bind({});

InputBoxTemplate.args = {
  state: "Box",
  size: 36,
  showCount: false,
  maxLength: 50,
  allowClear: false,
  placeholder: "placeholder",
  error: false,
  disabled: false,
  advise: "advise",
};
