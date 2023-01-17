import { screen, userEvent } from "@storybook/testing-library";
import { SBDialog_Variable_Custom } from "./Dialog_VariableCustom";
import { StyledComponentRenderSetting } from "hook/test/hook";

describe("SB용 컴포넌트를 사용한 Dialog_Variable state 별 텍스트 노출 테스트", () => {
  it("Normal state 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="Normal" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(
      screen.queryByText("hello 이것은 Normal 텍스트"),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("subtextsubtextsubtext subtextsubtextsubtextsubtext"),
    ).toBeInTheDocument();
    expect(screen.queryByText("버튼1")).toBeInTheDocument();
  });
  it("Alert state 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="Alert" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(screen.queryByText("hello 이것은 Alert 텍스트")).toBeInTheDocument();
    expect(screen.queryByText("버튼2")).toBeInTheDocument();
  });
  it("AlertIcon state 테스트", () => {
    StyledComponentRenderSetting(
      <SBDialog_Variable_Custom state="AlertIcon" />,
    );
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(
      screen.queryByText("hello 이것은 AlertIcon 텍스트"),
    ).toBeInTheDocument();
    expect(screen.queryByText("버튼3")).toBeInTheDocument();
  });
  it("AlertIcon state 테스트", () => {
    StyledComponentRenderSetting(
      <SBDialog_Variable_Custom state="AlertIcon" />,
    );
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(
      screen.queryByText("hello 이것은 AlertIcon 텍스트"),
    ).toBeInTheDocument();
    expect(screen.queryByText("버튼1")).toBeInTheDocument();
  });
  it("Error state 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="Error" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(screen.queryByText("hello 이것은 Error 텍스트")).toBeInTheDocument();
    expect(screen.queryByText("버튼2")).toBeInTheDocument();
    expect(screen.queryByText("안녕하세요")).toBeInTheDocument();
    expect(screen.queryByText("안녕못해요")).toBeInTheDocument();
  });
  it("InputBox state 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="InputBox" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(
      screen.queryByText("hello 이것은 InputBox 텍스트"),
    ).toBeInTheDocument();
    expect(screen.queryByText("버튼2")).toBeInTheDocument();
    expect(screen.queryByText("하이")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("placeholder")).toBeInTheDocument();
  });
  it("Radio state 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="Radio" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(screen.queryByText("hello 이것은 Radio 텍스트")).toBeInTheDocument();
    expect(screen.queryByText("버튼3")).toBeInTheDocument();
    expect(screen.queryByText("hello")).toBeInTheDocument();
    expect(screen.queryByLabelText("1")).toBeInTheDocument();
    expect(screen.queryByLabelText("2")).toBeInTheDocument();
    expect(screen.queryByLabelText("3")).toBeInTheDocument();
  });
});
describe("event 테스트", () => {
  it("background 테스트", () => {
    StyledComponentRenderSetting(<SBDialog_Variable_Custom state="Normal" />);
    userEvent.click(screen.queryByText("스토리북 용 Dialog on/off 버튼"));
    expect(
      screen.queryByText("hello 이것은 Normal 텍스트"),
    ).toBeInTheDocument();
    userEvent.click(screen.queryByTestId("background"));
    expect(
      screen.queryByText("hello 이것은 Normal 텍스트"),
    ).not.toBeInTheDocument();
  });
});
