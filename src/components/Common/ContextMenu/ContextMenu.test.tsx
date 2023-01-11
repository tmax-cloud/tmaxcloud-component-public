import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StyledComponentRenderSetting } from "hook/test/hook";
import {
  contextMenuPropsType,
  SBContextMenuTrigger,
} from "./ContextMenu_Custom";

describe("ContextMenu 스토리북용 컴포넌트를 사용한 노출 테스트(트리거 버튼)", () => {
  const args: contextMenuPropsType = {
    title: "기본 타이틀",
    items: [
      { separator: true },
      {
        prefixIcon: "Icon",
        itemTitle: "아이콘",
      },
      {
        prefixIcon: "Checkbox",
        itemTitle: "체크박스",
      },
      { separator: true },
      {
        prefixIcon: "Label",
        itemTitle: "라벨",
        items: [
          {
            title: "Deps1",
            items: [
              { separator: true },
              {
                prefixIcon: "Icon",
                itemTitle: "Deps1아이콘",
              },
              {
                prefixIcon: "Checkbox",
                itemTitle: "Deps1체크박스",
              },
              {
                prefixIcon: "Label",
                itemTitle: "Deps1라벨",
              },
              {
                itemTitle: "Deps1Prefix없음",
              },
            ],
          },
        ],
      },
      {
        itemTitle: "Prefix없음",
        items: [
          {
            title: "Deps1",
            items: [
              { separator: true },
              {
                prefixIcon: "Icon",
                itemTitle: "Deps1아이콘",
                items: [
                  {
                    title: "Deps2",
                    items: [
                      {
                        prefixIcon: "Icon",
                        itemTitle: "Deps2아이콘",
                      },
                      { separator: true },
                      {
                        prefixIcon: "Checkbox",
                        itemTitle: "Deps2체크박스",
                      },
                      {
                        prefixIcon: "Label",
                        itemTitle: "Deps2라벨",
                      },
                      {
                        itemTitle: "Deps2Prefix없음",
                      },
                    ],
                  },
                ],
              },
              {
                prefixIcon: "Checkbox",
                itemTitle: "Deps1체크박스",
              },
              {
                prefixIcon: "Label",
                itemTitle: "Deps1라벨",
              },
              { separator: true },
              {
                itemTitle: "Deps1Prefix없음",
              },
            ],
          },
        ],
      },
    ],
  };

  it("트리거 버튼 이벤트 정상 작동 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    userEvent.click(screen.queryByText("menu 트리거"));
    expect(screen.queryByText("기본 타이틀")).toBeInTheDocument();
    userEvent.click(screen.queryByText("menu 트리거"));
    expect(screen.queryByText("기본 타이틀")).toBeNull();
    userEvent.click(screen.queryByText("menu 트리거"));
    expect(screen.queryByText("기본 타이틀")).toBeInTheDocument();
  });
  it("트리거 버튼 Hover 이벤트로 1Deps 노출 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    userEvent.click(screen.queryByText("menu 트리거"));
    userEvent.hover(screen.queryByText("Prefix없음"));
    expect(screen.queryByText("Deps1아이콘")).toBeInTheDocument();
    expect(screen.queryByText("Deps1라벨")).toBeInTheDocument();
  });
  it("트리거 버튼 Hover 이벤트로 2Deps 노출 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    userEvent.click(screen.queryByText("menu 트리거"));
    userEvent.hover(screen.queryByText("Prefix없음"));
    userEvent.hover(screen.queryByText("Deps1아이콘"));
    expect(screen.queryByText("Deps2")).toBeInTheDocument();
    expect(screen.queryByText("Deps2아이콘")).toBeInTheDocument();
  });
});
describe("ContextMenu 스토리북용 컴포넌트를 사용한 노출 테스트(ContextMenu)", () => {
  const args: contextMenuPropsType = {
    title: "기본 타이틀",
    items: [
      { separator: true },
      {
        prefixIcon: "Icon",
        itemTitle: "아이콘",
      },
      {
        prefixIcon: "Checkbox",
        itemTitle: "체크박스",
      },
      { separator: true },
      {
        prefixIcon: "Label",
        itemTitle: "라벨",
        items: [
          {
            title: "Deps1",
            items: [
              { separator: true },
              {
                prefixIcon: "Icon",
                itemTitle: "Deps1아이콘",
              },
              {
                prefixIcon: "Checkbox",
                itemTitle: "Deps1체크박스",
              },
              {
                prefixIcon: "Label",
                itemTitle: "Deps1라벨",
              },
              {
                itemTitle: "Deps1Prefix없음",
              },
            ],
          },
        ],
      },
      {
        itemTitle: "Prefix없음",
        items: [
          {
            title: "Deps1",
            items: [
              { separator: true },
              {
                prefixIcon: "Icon",
                itemTitle: "Deps1아이콘",
                items: [
                  {
                    title: "Deps2",
                    items: [
                      {
                        prefixIcon: "Icon",
                        itemTitle: "Deps2아이콘",
                      },
                      { separator: true },
                      {
                        prefixIcon: "Checkbox",
                        itemTitle: "Deps2체크박스",
                      },
                      {
                        prefixIcon: "Label",
                        itemTitle: "Deps2라벨",
                      },
                      {
                        itemTitle: "Deps2Prefix없음",
                      },
                    ],
                  },
                ],
              },
              {
                prefixIcon: "Checkbox",
                itemTitle: "Deps1체크박스",
              },
              {
                prefixIcon: "Label",
                itemTitle: "Deps1라벨",
              },
              { separator: true },
              {
                itemTitle: "Deps1Prefix없음",
              },
            ],
          },
        ],
      },
    ],
  };
  it("ContextMenu 이벤트 정상 작동 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    fireEvent.contextMenu(screen.queryByText("배경 외부 클릭시 menu off"));
    expect(screen.queryByText("기본 타이틀")).toBeInTheDocument();
    userEvent.click(screen.queryByText("배경 외부 클릭시 menu off"));
    expect(screen.queryByText("기본 타이틀")).toBeNull();
  });
  it("ContextMenu Hover 이벤트로 1Deps 노출 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    fireEvent.contextMenu(screen.queryByText("배경 외부 클릭시 menu off"));
    expect(screen.queryByText("Prefix없음")).toBeInTheDocument();
    userEvent.hover(screen.queryByText("Prefix없음"));
    expect(screen.queryByText("Deps1아이콘")).toBeInTheDocument();
    expect(screen.queryByText("Deps1라벨")).toBeInTheDocument();
  });
  it("ContextMenu Hover 이벤트로 2Deps 노출 확인", () => {
    StyledComponentRenderSetting(<SBContextMenuTrigger {...args} />);
    fireEvent.contextMenu(screen.queryByText("배경 외부 클릭시 menu off"));
    userEvent.hover(screen.queryByText("Prefix없음"));
    userEvent.hover(screen.queryByText("Deps1아이콘"));
    expect(screen.queryByText("Deps2")).toBeInTheDocument();
    expect(screen.queryByText("Deps2아이콘")).toBeInTheDocument();
  });
});
