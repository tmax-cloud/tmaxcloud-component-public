import Attachment from "./Attachment";
import { StyledComponentRenderSetting } from "hook/test/hook";
import { screen } from "@testing-library/react";
describe("state 별 텍스트 노출 테스트", () => {
  it("Medium state 텍스트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Attachment state="Medium" name="이름" size="크기" />,
    );
    expect(screen.queryByText("이름")).toBeInTheDocument();
    expect(screen.queryByText("크기")).toBeInTheDocument();
  });
  it("Large state 텍스트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Attachment state="Large" name="이름" size="크기" />,
    );
    expect(screen.queryByText("이름")).toBeInTheDocument();
    expect(screen.queryByText("크기")).toBeInTheDocument();
  });
});
