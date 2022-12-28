import Accordion from "./Accordion";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";
import userEvent from "@testing-library/user-event";
describe("Accordion 공통 테스트", () => {
  it("제목 클릭에 따른 하단 내용 노출 여부 (미클릭, 첫클릭, 두번 클릭)", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion
          state="List"
          category="아코디언 테스트"
          title="테스트 제목"
          content="테스트 내용"
          disabled={false}
        />
      </ThemeProvider>,
    );
    /** 처음엔 하단 내용 노출 X */
    expect(() => screen.getByText("테스트 내용")).toThrow(Error);
    userEvent.click(screen.getByText("테스트 제목"));
    /** 클릭 후 하단 내용 노출 */
    expect(screen.getByText("테스트 내용")).toBeTruthy();
    userEvent.click(screen.getByText("테스트 제목"));
    /** 다시 클릭 후 하단 내용 노출 X */
    expect(() => screen.getByText("테스트 내용")).toThrow(Error);
  });

  it("disabled 활성화시 click 이벤트 정지 여부", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion
          state="List"
          category="아코디언 테스트"
          title="테스트 제목"
          content="테스트 내용"
          disabled={true}
        />
      </ThemeProvider>,
    );
    userEvent.click(screen.getByText("테스트 제목"));
    expect(() => screen.getByText("테스트 내용")).toThrow(Error);
  });
});
describe("Accordion 타입별 카테고리 텍스트 노출 테스트", () => {
  it("Box Type 카테고리 노출 X", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion
          state="Box"
          category="아코디언 테스트"
          title="테스트 제목"
          content="테스트 내용"
          disabled={true}
        />
      </ThemeProvider>,
    );
    consoasdfasdfle.log("error");
    expect(() => screen.getByText("아코디언 테스트")).toThrow(Error);
  });

  it("List Type 카테고리 노출 O", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion
          state="List"
          category="아코디언 테스트"
          title="테스트 제목"
          content="테스트 내용"
          disabled={true}
        />
      </ThemeProvider>,
    );
    expect(() => screen.getByText("아코디언 테스트")).toBeTruthy();
  });

  it("Row Type 카테고리 노출 X", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Accordion
          state="Row"
          category="아코디언 테스트"
          title="테스트 제목"
          content="테스트 내용"
          disabled={true}
        />
      </ThemeProvider>,
    );
    expect(() => screen.getByText("아코디언 테스트")).toThrow(Error);
  });
});
