import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatePicker_Custom } from "./DatePicker_Custom";
import { StyledComponentRenderSetting } from "hook/test/hook";

describe("state 별 달력 활성화 & 값 테스트", () => {
  it("state Default 테스트", () => {
    const onChange = jest.fn((e) => e);
    StyledComponentRenderSetting(
      <DatePicker_Custom state="Default" onChange={onChange} />,
    );
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue("");

    userEvent.click(screen.queryByPlaceholderText("날짜 선택"));
    expect(screen.queryAllByTitle(/\d{4}-\d{2}-01/));

    userEvent.click(screen.queryAllByTitle(/\d{4}-\d{2}-01/)[0]);
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue(
      onChange.mock.results[0].value,
    );
    expect(onChange).toBeCalledTimes(1);
  });
  it("state Yearly 테스트", () => {
    const onChange = jest.fn((e) => e);
    StyledComponentRenderSetting(
      <DatePicker_Custom state="Yearly" onChange={onChange} />,
    );
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue("");

    userEvent.click(screen.queryByPlaceholderText("날짜 선택"));
    expect(screen.queryAllByTitle(/2\d{2}1/));

    userEvent.click(screen.queryAllByTitle(/20\d{1}1/)[0]);
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue(
      onChange.mock.results[0].value,
    );
    expect(onChange).toBeCalledTimes(1);
  });

  it("state Monthly 테스트", () => {
    const onChange = jest.fn((e) => e);
    StyledComponentRenderSetting(
      <DatePicker_Custom state="Monthly" onChange={onChange} />,
    );
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue("");

    userEvent.click(screen.queryByPlaceholderText("날짜 선택"));
    expect(screen.queryByTitle(/\d{4}-01/));

    userEvent.click(screen.queryByTitle(/\d{4}-01/));
    expect(screen.queryByPlaceholderText("날짜 선택")).toHaveValue(
      onChange.mock.results[0].value,
    );
    expect(onChange).toBeCalledTimes(1);
  });
});
