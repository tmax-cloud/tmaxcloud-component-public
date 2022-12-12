import Breadcrumb from "./Breadcrumb";
import styled from "styled-components";
import { ReactComponent as fileIcon } from "Icon/content/file/line/Default.svg";

export default {
  title: "11월 5주차/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "브레드크럼은 일반적으로 사이트의 header와 기본 컨텐츠 사이에 배치되는 탐색 보조 도구로, 사이트 구조와 관련된 현재 페이지의 계층 구조, 최상위에서부터 현재 페이지까지를 사용자의 링크 목록 등으로 표시한다. 현재 페이지까지 방문한 순서대로 표출한다.",
  },
};

const FileIcon = styled(fileIcon)`
  width: 1.4rem;
  height: 1.4rem;
`;

const Template = (args) => <Breadcrumb {...args} />;

export const BreadcrumbTemplate = Template.bind({});
BreadcrumbTemplate.args = {
  propList: [
    {
      text: "test1",
      href: "/",
      disabled: false,
    },
    {
      text: "test2",
      href: "/",
      disabled: false,
    },
    {
      text: "test3",
      href: "/",
      disabled: true,
    },
    {
      text: "test4",
      href: "/",
      disabled: false,
    },
  ],
};

export const IconBreadcrumbTemplate = Template.bind({});

IconBreadcrumbTemplate.args = {
  propList: [
    {
      propIcon: {
        icon: <FileIcon />,
        iconLabel: "text1의 아이콘",
      },
      text: "test1",
      href: "/",
      disabled: false,
    },
    {
      propIcon: {
        icon: <FileIcon />,
        iconLabel: "text2의 아이콘",
      },
      text: "test2",
      href: "/",
      disabled: false,
    },
    {
      propIcon: {
        icon: <FileIcon />,
        iconLabel: "text3의 아이콘",
      },
      text: "test3",
      href: "/",
      disabled: true,
    },
    {
      propIcon: {
        icon: <FileIcon />,
        iconLabel: "text4의 아이콘",
      },
      text: "test4",
      href: "/",
      disabled: false,
    },
  ],
  disabled: false,
};
