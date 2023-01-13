import { screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import {
  StyledComponentRenderSetting,
  StyledComponentRenderRouterSetting,
} from "hook/test/hook";
import { ReactComponent as fileIcon } from "Icon/content/file/line/Default.svg";
import styled from "styled-components";
import { userEvent } from "@storybook/testing-library";
import { Routes, Route } from "react-router-dom";

const FileIcon = styled(fileIcon)`
  width: 1.4rem;
  height: 1.4rem;
`;

describe("텍스트 노출 테스트", () => {
  it("아이콘 없을 시", () => {
    const propList = [
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
    ];
    StyledComponentRenderRouterSetting(<Breadcrumb propList={propList} />);
    expect(screen.queryByText("test1")).toBeInTheDocument;
    expect(screen.queryByText("test2")).toBeInTheDocument;
    expect(screen.queryByText("test3")).toBeInTheDocument;
    expect(screen.queryByText("test4")).toBeInTheDocument;
  });
  it("아이콘 있을 시", () => {
    const propList = [
      {
        propIcon: {
          icon: <FileIcon />,
          iconLabel: "text3의 아이콘",
        },
        text: "test1",
        href: "/",
        disabled: false,
      },
      {
        propIcon: {
          icon: <FileIcon />,
          iconLabel: "text3의 아이콘",
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
          iconLabel: "text3의 아이콘",
        },
        text: "test4",
        href: "/",
        disabled: false,
      },
    ];
    StyledComponentRenderRouterSetting(<Breadcrumb propList={propList} />);
    expect(screen.queryByText("test1")).toBeInTheDocument;
    expect(screen.queryByText("test2")).toBeInTheDocument;
    expect(screen.queryByText("test3")).toBeInTheDocument;
    expect(screen.queryByText("test4")).toBeInTheDocument;
  });
});
describe("navigation 테스트", () => {
  it("navigation not disabled", () => {
    const propList = [
      {
        text: "test1",
        href: "/a",
        disabled: false,
      },
      {
        text: "test2",
        href: "/b",
        disabled: false,
      },
      {
        text: "test3",
        href: "/c",
        disabled: false,
      },
      {
        text: "test4",
        href: "/",
        disabled: false,
      },
    ];

    StyledComponentRenderRouterSetting(
      <Routes>
        <Route path="*" element={<Breadcrumb propList={propList} />} />
      </Routes>,
    );
    expect(location.pathname === "/").toBeTruthy();
    userEvent.click(screen.queryByText("test1"));
    expect(location.pathname === "/a").toBeTruthy();
    userEvent.click(screen.queryByText("test2"));
    expect(location.pathname === "/b").toBeTruthy();
    userEvent.click(screen.queryByText("test3"));
    expect(location.pathname === "/c").toBeTruthy();
    userEvent.click(screen.queryByText("test4"));
    expect(location.pathname === "/").toBeTruthy();
  });
  it("navigation disabled", () => {
    const propList = [
      {
        text: "test1",
        href: "/a",
        disabled: true,
      },
      {
        text: "test2",
        href: "/b",
        disabled: true,
      },
      {
        text: "test3",
        href: "/c",
        disabled: true,
      },
      {
        text: "test4",
        href: "/d",
        disabled: true,
      },
    ];
    StyledComponentRenderRouterSetting(
      <Routes>
        <Route path="*" element={<Breadcrumb propList={propList} />} />
      </Routes>,
    );
    expect(() => userEvent.click(screen.queryByText("test1"))).toThrow();
    expect(() => userEvent.click(screen.queryByText("test2"))).toThrow();
    expect(() => userEvent.click(screen.queryByText("test3"))).toThrow();
    expect(() => userEvent.click(screen.queryByText("test4"))).toThrow();
  });
});
