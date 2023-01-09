import Accordion from "./Accordion";
import userEvent from "@testing-library/user-event";
import { StyledComponentRenderSetting } from "hook/test/hook";
import { screen } from "@testing-library/react";
describe("Accordion state 별 text,event 테스트 ", () => {
  it("Box state click event", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Box"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    /** 처음엔 하단 내용 노출 X */
    expect(screen.queryByText("테스트 제목")).toBeInTheDocument();
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 클릭 후 하단 내용 노출 */
    expect(screen.queryByText("테스트 내용")).toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 다시 클릭 후 하단 내용 노출 X */
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
  });

  it("List state click event", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="List"
        category="카테고리 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    /** 처음엔 하단 내용 노출 X */
    expect(screen.queryByText("테스트 제목")).toBeInTheDocument();
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
    expect(screen.queryByText("카테고리 테스트")).toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 클릭 후 하단 내용 노출 */
    expect(screen.queryByText("테스트 내용")).toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 다시 클릭 후 하단 내용 노출 X */
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
  });

  it("Row state click event", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Row"
        title="테스트 제목"
        content="테스트 내용"
        disabled={false}
      />,
    );
    /** 처음엔 하단 내용 노출 X */
    expect(screen.queryByText("테스트 제목")).toBeInTheDocument();
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 클릭 후 하단 내용 노출 */
    expect(screen.queryByText("테스트 내용")).toBeInTheDocument();
    userEvent.click(screen.queryByText("테스트 제목"));
    /** 다시 클릭 후 하단 내용 노출 X */
    expect(screen.queryByText("테스트 내용")).not.toBeInTheDocument();
  });
});
describe("disabled 테스트", () => {
  it("Box state / disabled 활성화시 click 이벤트 정지 여부", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Box"
        title="테스트 제목"
        content="테스트 내용"
        disabled={true}
      />,
    );

    expect(() => userEvent.click(screen.queryByText("테스트 제목"))).toThrow();
  });
  it("List state / disabled 활성화시 click 이벤트 정지 여부", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="List"
        category="아코디언 테스트"
        title="테스트 제목"
        content="테스트 내용"
        disabled={true}
      />,
    );
    expect(() => userEvent.click(screen.queryByText("테스트 제목"))).toThrow();
  });
  it("Row state / disabled 활성화시 click 이벤트 정지 여부", () => {
    StyledComponentRenderSetting(
      <Accordion
        state="Row"
        title="테스트 제목"
        content="테스트 내용"
        disabled={true}
      />,
    );
    expect(() => userEvent.click(screen.queryByText("테스트 제목"))).toThrow();
  });
});
