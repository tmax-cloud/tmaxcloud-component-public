import { screen } from "@testing-library/react";
import Badge from "./Badge";
import { StyledComponentRenderSetting } from "hook/test/hook";

describe("state 별 텍스트 노출 테스트", () => {
  it("Default state 텍스트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Badge backgroundColor="#333333" state="Default" text="10" />,
    );
    expect(screen.queryByText(10)).toBeInTheDocument();
  });
  it("Icon state 텍스트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Badge backgroundColor="#333333" state="Icon" text="10" />,
    );
    expect(screen.queryByText(10)).toBeInTheDocument();
  });
  it("Dot state 텍스트 미 노출 확인", () => {
    StyledComponentRenderSetting(
      <Badge backgroundColor="#333333" state="Dot" text="10" />,
    );
    expect(screen.queryByText(10)).not.toBeInTheDocument();
  });
});
