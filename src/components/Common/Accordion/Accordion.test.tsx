import Accordion from "./Accordion";
import userEvent from "@testing-library/user-event";
import { StyledComponentRenderSetting } from "hook/test/hook";
import { screen } from "@testing-library/react";
describe("Accordion 공통 테스트", () => {
  it("제목 클릭에 따른 하단 내용 노출 여부 (미클릭, 첫클릭, 두번 클릭)", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="List"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    /** 처음엔 하단 내용 노출 X */
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 클릭 후 하단 내용 노출 */
    expect(screen.queryByText("테스트 내용")).toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 다시 클릭 후 하단 내용 노출 X */
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
  });

  it("disabled 활성화시 click 이벤트 정지 여부", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="List"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={true}
      />,
    );
    userEvent.click(screen.queryByText("테스트 제목"));
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
  });
});
describe("Accordion 타입별 카테고리 텍스트 노출 테스트", () => {
  it("Box state 카테고리 노출 X", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Box"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    expect(screen.queryByText("아코디언 테스트")).not.toBeInTheDocument();
  });

  it("List state 카테고리 노출 O", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="List"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    expect(screen.queryByText("아코디언 테스트")).toBeInTheDocument();
  });

  it("Row state 카테고리 노출 X", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Row"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    expect(screen.queryByText("아코디언 테스트")).not.toBeInTheDocument();
  });
});
