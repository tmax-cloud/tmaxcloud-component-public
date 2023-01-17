import { userEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";
import { SBDialog } from "./Dialog";
import { StyledComponentRenderSetting } from "hook/test/hook";

describe("텍스트 노출 테스트", () => {
  it("제목, 내용 노출 테스트", () => {
    const args = {
      title: "제목",
      contents: "내용",
      footerButton: <button>닫기처럼 보이지만 닫을 수 없는 버튼</button>,
      isModalVisible: false,
      handleCancel: () => console.log("닫기 버튼 클릭"),
    };
    StyledComponentRenderSetting(<SBDialog {...args} />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(screen.queryByText("제목")).toBeInTheDocument();
    expect(screen.queryByText("내용")).toBeInTheDocument();
  });
});
describe("event 테스트", () => {
  it("외부 클릭시 모달창 닫기 event 테스트", () => {
    const args = {
      title: "제목",
      contents: "내용",
      footerButton: <button>닫기처럼 보이지만 닫을 수 없는 버튼</button>,
      isModalVisible: false,
      handleCancel: () => console.log("닫기 버튼 클릭"),
    };
    StyledComponentRenderSetting(<SBDialog {...args} />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    userEvent.click(screen.queryByTestId("background"));
    expect(screen.queryByText("제목")).not.toBeInTheDocument();
    expect(screen.queryByText("내용")).not.toBeInTheDocument();
  });
});
