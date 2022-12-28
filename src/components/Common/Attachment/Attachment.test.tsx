import Attachment from "./Attachment";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";
describe("Attachment 공통 테스트", () => {
  it("matches snapshot", () => {
    const utils = render(
      <ThemeProvider theme={defaultTheme}>
        <Attachment state="Medium" name="이름" size="크기" />
      </ThemeProvider>,
    );
    expect(utils.container).toMatchSnapshot();
  });
  it("텍스트 노출 확인", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Attachment state="Medium" name="이름" size="크기" />
      </ThemeProvider>,
    );
    expect(screen.getByText("이름")).toBeTruthy();
    expect(screen.getByText("크기")).toBeTruthy();
    console.log(screen.getByText("크기").style.color);
  });
});
