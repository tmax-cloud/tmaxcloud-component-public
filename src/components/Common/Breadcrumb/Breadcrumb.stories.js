import Breadcrumb from "./Breadcrumb";

export default {
  title: "개발중/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: "서브타이틀",
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const BreadcrumbTemplate = Template.bind({});
BreadcrumbTemplate.args = {
  propList: [
    {
      text: "test1",
      href: "/",
    },
    {
      text: "test2",
      href: "/",
    },
    {
      text: "test3",
      href: "/",
    },
    {
      text: "test4",
      href: "/",
    },
  ],
  size: "Large",
  disabled: false,
};

export const IconBreadcrumbTemplate = Template.bind({});

IconBreadcrumbTemplate.args = {
  propList: [
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text1의 아이콘",
      },
      text: "test1",
      href: "/",
    },
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text2의 아이콘",
      },
      text: "test2",
      href: "/",
    },
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text3의 아이콘",
      },
      text: "test3",
      href: "/",
    },
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text4의 아이콘",
      },
      text: "test4",
      href: "/",
    },
  ],
  size: "Large",
  disabled: false,
};
