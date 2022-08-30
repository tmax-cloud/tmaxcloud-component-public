import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Common/Accordion",
  component: Accordion,
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      "제한된 공간에 정보를 표시하기 위해 접을 수 있는 내용 패널",
    docs: {
      description: {
        component: "Accordion",
      },
    },
  },
};

const Template = (args) => <Accordion {...args} />;

export const AccordionTemplate = Template.bind({});

AccordionTemplate.args = {
  state: "Box",
  title: "타이틀",
  content: "내용물",
  disabled: false,
};
