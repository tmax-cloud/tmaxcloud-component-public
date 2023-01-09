import Chip from "./Chip";
import { StyledComponentRenderSetting } from "hook/test/hook";
import { screen } from "@testing-library/react";

describe("Chip state 별 props 노출 테스트", () => {
  it("Default state text, icon 노출 확인", () => {
    StyledComponentRenderSetting(
      <Chip
        state="Default"
        DefaultChipProps={{
          text: "Default 텍스트 테스트",
          icon: <img src="Icon/dummy_icon.svg" alt="img" />,
        }}
      />,
    );
    expect(screen.queryByText("Default 텍스트 테스트")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
  it("Default state image 노출 확인", () => {
    StyledComponentRenderSetting(
      <Chip
        state="Default"
        DefaultChipProps={{
          text: "Default 텍스트 테스트",
          image: <img src="Icon/dummy_icon.svg" alt="img" />,
        }}
      />,
    );
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
  it("Input state text, icon 노출 확인", () => {
    const onClick = jest.fn();
    StyledComponentRenderSetting(
      <Chip
        state="Input"
        InputChipProps={{
          text: "Input 텍스트 테스트",
          icon: <img src="Icon/dummy_icon.svg" alt="img" />,
          onClick: onClick,
        }}
      />,
    );
    expect(screen.queryByText("Input 텍스트 테스트")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
  it("Input state image 노출 확인", () => {
    const onClick = jest.fn();
    StyledComponentRenderSetting(
      <Chip
        state="Input"
        InputChipProps={{
          text: "Input 텍스트 테스트",
          image: <img src="Icon/dummy_icon.svg" alt="img" />,
          onClick: onClick,
        }}
      />,
    );
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
  it("Filter state text, icon 노출 확인", () => {
    StyledComponentRenderSetting(
      <Chip
        state="Filter"
        FilterChipProps={{
          text: "Filter 텍스트 테스트",
          icon: <img src="Icon/dummy_icon.svg" alt="img" />,
          isCloseAble: false,
        }}
      />,
    );
    expect(screen.queryByText("Filter 텍스트 테스트")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
  it("Filter state image 노출 확인", () => {
    StyledComponentRenderSetting(
      <Chip
        state="Filter"
        FilterChipProps={{
          text: "Filter 텍스트 테스트",
          image: <img src="Icon/dummy_icon.svg" alt="img" />,
          isCloseAble: false,
        }}
      />,
    );
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });
});
