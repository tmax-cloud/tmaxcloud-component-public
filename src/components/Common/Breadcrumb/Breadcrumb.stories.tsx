import Breadcrumb from "./Breadcrumb";

export default {
  title: "개발중/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "브레드크럼은 일반적으로 사이트의 header와 기본 컨텐츠 사이에 배치되는 탐색 보조 도구로, 사이트 구조와 관련된 현재 페이지의 계층 구조, 최상위에서부터 현재 페이지까지를 사용자의 링크 목록 등으로 표시한다. 현재 페이지까지 방문한 순서대로 표출한다.",
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
  disabled: false,
};
