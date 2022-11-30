import styled from "styled-components";
import { SBDropdown, Dropdown } from "./Dropdown";
import { ReactComponent as cancelIcon } from "Icon/content/circle_button/cancel/fill.svg";

export default {
  title: "11월 5주차/Dropdown",
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
        component: "Dropbox의 props 요소로 인해 control 사용 불가",
      },
    },
  },
};

const Template = (args) => <SBDropdown {...args} />;

export const defaultTemplate = Template.bind({});
defaultTemplate.args = {
  state: "Default",
  placeHolderText: "placeholder",
  dropdownChildren: [
    { text: "hello" },
    { text: "2hello" },
    {
      text: "3hello",
      childrenProp: [
        { text: "4hello" },
        { text: "5hello" },
        {
          text: "6hello",
          childrenProp: [
            {
              text: "7hello",
            },
          ],
        },
      ],
    },
  ],
};

const LabelContent = styled.div`
  height: 1.6rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10rem;
  ${({ theme }) => theme.font.detail2_400};
  background-color: ${({ theme }) => theme.color.marine._500};
  color: ${({ theme }) => theme.color.white._100};
  line-height: 1.1rem;
`;

export const labelTemplate = Template.bind({});
labelTemplate.args = {
  state: "Content",
  placeHolderText: "labelTest",
  placeHolderOption: {
    location: "prefix",
    option: <LabelContent>llllll</LabelContent>,
  },
  dropdownChildren: [
    {
      text: "hello",
      location: "prefix",
      option: <LabelContent>hello</LabelContent>,
    },
    {
      text: "2hello",
      location: "prefix",
      option: <LabelContent>2hello</LabelContent>,
    },
    {
      text: "3hello",
      location: "affix",
      option: <LabelContent>3hello</LabelContent>,
      childrenProp: [
        {
          text: "4hello",
          location: "prefix",
          option: <LabelContent>4hello</LabelContent>,
        },
        {
          text: "5hello",
          location: "prefix",
          option: <LabelContent>5hello</LabelContent>,
        },
        {
          text: "6hello",
          location: "prefix",
          option: <LabelContent>6hello</LabelContent>,
          childrenProp: [
            {
              text: "7hello",
              location: "affix",
              option: <LabelContent>7hello</LabelContent>,
            },
          ],
        },
      ],
    },
  ],
};

const CancelIcon = styled(cancelIcon)`
  color: ${({ theme }) => theme.color.gray._400};
  :hover {
    color: ${({ theme }) => theme.color.gray._700};
  }
  :active {
    color: ${({ theme }) => theme.color.gray._900};
  }
`;

export const iconTemplate = Template.bind({});
iconTemplate.args = {
  state: "Content",
  placeHolderText: "labelTest",
  placeHolderOption: {
    location: "prefix",
    option: <CancelIcon />,
  },
  dropdownChildren: [
    {
      text: "hello",
      location: "prefix",
      option: <CancelIcon />,
    },
    {
      text: "2hello",
      location: "prefix",
      option: <CancelIcon />,
    },
    {
      text: "3hello",
      location: "affix",
      option: <CancelIcon />,
      childrenProp: [
        {
          text: "4hello",
          location: "prefix",
          option: <CancelIcon />,
        },
        {
          text: "5hello",
          location: "affix",
          option: <CancelIcon />,
        },
        {
          text: "6hello",
          location: "prefix",
          option: <CancelIcon />,
          childrenProp: [
            {
              text: "7hello",
              location: "affix",
              option: <CancelIcon />,
            },
          ],
        },
      ],
    },
  ],
};

export const checkboxTemplate = Template.bind({});
checkboxTemplate.args = {
  state: "Checkbox",
  placeHolderText: 0,
  placeHolderOption: {
    location: "prefix",
    option: <LabelContent>llllll</LabelContent>,
  },
  dropdownChildren: [
    {
      text: "hello",
      location: "prefix",
      option: <LabelContent>hello</LabelContent>,
    },
    {
      text: "2hello",
      location: "prefix",
      option: <LabelContent>2hello</LabelContent>,
    },
    {
      text: "3hello",
      location: "affix",
      option: <LabelContent>3hello</LabelContent>,
      childrenProp: [
        {
          text: "4hello",
          location: "prefix",
          option: <LabelContent>4hello</LabelContent>,
        },
        {
          text: "5hello",
          location: "prefix",
          option: <LabelContent>5hello</LabelContent>,
        },
        {
          text: "6hello",
          location: "prefix",
          option: <LabelContent>6hello</LabelContent>,
          childrenProp: [
            {
              text: "7hello",
              location: "affix",
              option: <LabelContent>7hello</LabelContent>,
            },
          ],
        },
      ],
    },
  ],
};
