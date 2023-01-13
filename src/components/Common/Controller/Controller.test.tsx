import Controller from "./Controller";
import { StyledComponentRenderSetting } from "hook/test/hook";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("state 별 노출 테스트", () => {
  it("Switch state 컴포넌트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Controller
        state="Switch"
        props={{
          text: "switch테스트",
          size: "small",
        }}
      />,
    );
    expect(screen.queryByRole("switch")).toBeInTheDocument();
  });
  it("Checkbox state 컴포넌트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Controller state="Checkbox" props={{ text: "Checkbox 테스트" }} />,
    );
    expect(screen.queryByLabelText("Checkbox 테스트")).toBeInTheDocument();
  });
  it("Spinner state 컴포넌트 노출 확인", () => {
    StyledComponentRenderSetting(
      <Controller
        state="Spinner"
        props={{
          disabled: false,
          onChange: (e) => console.log(e),
          number: 0,
        }}
      />,
    );
    expect(screen.queryByPlaceholderText("000")).toBeInTheDocument();
  });
});
describe("state 별 disabled 테스트", () => {
  it("Switch state disabled", () => {
    StyledComponentRenderSetting(
      <Controller
        state="Switch"
        props={{
          text: "switch테스트",
          size: "small",
          disabled: true,
        }}
      />,
    );
    expect(screen.queryByRole("switch")).toBeDisabled();
  });
  it("Checkbox state disabled", () => {
    StyledComponentRenderSetting(
      <Controller
        state="Checkbox"
        props={{ text: "Checkbox 테스트", disabled: true }}
      />,
    );
    expect(screen.queryByLabelText("Checkbox 테스트")).toBeDisabled();
  });
  it("Spinner state disabled", () => {
    StyledComponentRenderSetting(
      <Controller
        state="Spinner"
        props={{
          disabled: true,
          onChange: (e) => console.log(e),
          number: 0,
        }}
      />,
    );
    expect(screen.queryByPlaceholderText("000")).toBeDisabled();
  });
});
describe("state 별 event 테스트", () => {
  it("Switch state onChange event", () => {
    const onChange = jest.fn();
    StyledComponentRenderSetting(
      <Controller
        state="Switch"
        props={{
          text: "switch테스트",
          size: "small",
          disabled: false,
          onChange: onChange,
        }}
      />,
    );
    userEvent.click(screen.queryByRole("switch"));
    expect(onChange).toBeCalledTimes(1);
    expect(screen.queryByRole("switch")).toBeChecked();
    userEvent.click(screen.queryByRole("switch"));
    expect(onChange).toBeCalledTimes(2);
    expect(screen.queryByRole("switch")).not.toBeChecked();
    userEvent.click(screen.queryByRole("switch"));
    expect(onChange).toBeCalledTimes(3);
    expect(screen.queryByRole("switch")).toBeChecked();
  });
  it("Checkbox state onChange event", () => {
    const onChange = jest.fn();
    StyledComponentRenderSetting(
      <Controller
        state="Checkbox"
        props={{ text: "Checkbox 테스트", disabled: false, onChange: onChange }}
      />,
    );
    userEvent.click(screen.queryByLabelText("Checkbox 테스트"));
    expect(onChange).toBeCalledTimes(1);
    expect(screen.queryByLabelText("Checkbox 테스트")).toBeChecked();
    userEvent.click(screen.queryByLabelText("Checkbox 테스트"));
    expect(onChange).toBeCalledTimes(2);
    expect(screen.queryByLabelText("Checkbox 테스트")).not.toBeChecked();
    userEvent.click(screen.queryByLabelText("Checkbox 테스트"));
    expect(onChange).toBeCalledTimes(3);
    expect(screen.queryByLabelText("Checkbox 테스트")).toBeChecked();
  });
  it("Spinner state setNumber event", () => {
    const setNumber = jest.fn();
    StyledComponentRenderSetting(
      <Controller
        state="Spinner"
        props={{
          disabled: false,
          number: 0,
          setNumber: setNumber,
        }}
      />,
    );
    userEvent.click(screen.queryByTitle("plus"));
    expect(setNumber).toBeCalledTimes(1);
    expect(screen.queryByPlaceholderText("000")).toHaveValue(1);
    userEvent.click(screen.queryByTitle("plus"));
    expect(setNumber).toBeCalledTimes(2);
    expect(screen.queryByPlaceholderText("000")).toHaveValue(2);
    userEvent.click(screen.queryByTitle("minus"));
    expect(setNumber).toBeCalledTimes(3);
    expect(screen.queryByPlaceholderText("000")).toHaveValue(1);
    userEvent.click(screen.queryByTitle("minus"));
    expect(setNumber).toBeCalledTimes(4);
    userEvent.type(screen.queryByPlaceholderText("000"), "1234");
    expect(setNumber).toBeCalledTimes(7);
    expect(screen.queryByPlaceholderText("000")).toHaveValue(123);
  });
});
