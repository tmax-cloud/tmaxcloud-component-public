import { screen } from "@testing-library/react";
import Button from "./Button";
import { StyledComponentRenderSetting } from "hook/test/hook";
import userEvent from "@testing-library/user-event";

describe("Button state 별 텍스트 노출 테스트", () => {
  it("PrimaryA state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "PrimaryA";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("PrimaryB state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "PrimaryB";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("SecondaryA state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "SecondaryA";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("SecondaryB state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "SecondaryB";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("SecondaryC state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "SecondaryC";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("TertiaryA state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "TertiaryA";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
  it("TertiaryB state 텍스트 노출 확인", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "TertiaryB";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    expect(screen.queryByText(testState + " test")).toBeInTheDocument();
  });
});
describe("Button event 테스트", () => {
  it("click event test", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "PrimaryA";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    userEvent.click(screen.queryByText(testState + " test"));
    expect(onClick).toBeCalledTimes(1);
  });
  it("keyUp event test", () => {
    const onClick = jest.fn();
    const onKeyUp = jest.fn();
    const testState = "PrimaryA";
    StyledComponentRenderSetting(
      <Button
        state={testState}
        onClick={onClick}
        propSize="XL"
        text={testState + " test"}
        onKeyUp={onKeyUp}
      />,
    );
    userEvent.type(screen.queryByText(testState + " test"), "{enter}");
    expect(onKeyUp).toBeCalledTimes(1);
  });
});
