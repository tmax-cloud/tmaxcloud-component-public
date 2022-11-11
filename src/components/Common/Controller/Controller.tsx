import { Switch, Radio, Checkbox } from "antd";
import { useState } from "react";
import styled from "styled-components";

type ControllerPropsType = {
  /** 타입 */
  state: "Switch" | "Checkbox" | "Spinner";
  /** 내부 텍스트 */
  text: string;
  /** 이용가능 여부 */
  disabled: boolean;
  /** 크기(type = Switch전용) */
  size?: "small" | "default";
  /** 호버 시 노출되는 텍스트(type = Switch 전용) */
  title?: string;

  /** 상태변경시 동작하는 함수 (type = Switch,Checkbox 전용)*/
  onChange?: (e) => void;
  /**Spinner에 들어갈 숫자(type = Spinner 전용) */
  number?: number;
  /** number 설정하는 함수(type = Spinner 전용) */
  setNumber?: (e) => void;
};
const CheckboxLabel = styled.label`
  display: inline-flex;
  gap: 0.8rem;
  height: 2rem;
  align-items: center;
  ${({ theme }) => theme.font.body2_400};
`;
const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  width: 2rem;
  height: 2rem;

  &:hover {
    :not(:checked)::after {
      background-color: ${({ theme }) => theme.color.marine._50};
      border: 1px solid ${({ theme }) => theme.color.marine._500};
    }
  }
  &::after {
    content: " ";
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 0.6rem;
    border: 0.1rem solid ${({ theme }) => theme.color.blueGray._300};
    background-color: ${({ theme }) => theme.color.white._100};
  }
  &:disabled::after {
    border: 0.1rem solid ${({ theme }) => theme.color.gray._400};
    background-color: ${({ theme }) => theme.color.gray._200};
  }
  &:checked {
    ::after {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.color.marine._500};
      color: white;
      content: url("/asset/images/Icon/small-check.svg");
    }
  }
  &:disabled:checked::after {
    background-color: ${({ theme }) => theme.color.gray._400};
  }
`;
const SwitchCustomStyle = styled(Switch)`
  background-color: ${({ theme }) => theme.color.gray._200};
  background-image: none;
  &.ant-switch {
    min-width: 4.8rem;
    height: 2rem;
    &:focus {
      box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
  }
  &.ant-switch-small {
    min-width: 3.6rem;
    height: 1.6rem;
  }

  &.ant-switch-checked {
    background: ${({ theme }) => theme.color.marine._500};
  }
  .ant-switch-handle {
    top: -0.3rem;
    left: -0.3rem;
    width: 2.6rem;
    height: 2.6rem;

    &::before {
      border-radius: 10rem;
    }
  }
  &.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 2.3rem);
  }
  &.ant-switch-small .ant-switch-handle {
    width: 2rem;
    height: 2rem;
  }
  &.ant-switch-small.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 1.8rem);
  }
  &.ant-switch-disabled {
    opacity: 1;
    background-color: ${({ theme }) => theme.color.gray._400};
    .ant-switch-handle::before {
      background-color: ${({ theme }) => theme.color.gray._200};
    }
  }
`;
const SpinnerWrapper = styled.div`
  width: 10.6rem;
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white._100};
  border: 1px solid ${({ theme }) => theme.color.gray._300};
  border-radius: 0.8rem;
`;
const SpinnerCountImg = styled.img`
  border-radius: 2.4rem;
  :hover {
    background-color: ${({ theme }) => theme.color.black._4};
  }
  :active {
    background-color: ${({ theme }) => theme.color.black._10};
  }
`;
const SpinnerCountText = styled.div`
  input {
    all: unset;
    width: 3rem;
    ${({ theme }) => theme.font.body2_400};
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
/** 컨트롤러 */
const Controller = ({
  state,
  size,
  text,
  disabled,
  title,
  number,
  setNumber,
  onChange,
}: ControllerPropsType) => {
  const [spinnerNumber, setSpinnerNumber] = useState<number>(number || null);

  const onChangeSpinner = (e) => {
    if (
      e.target.value.length <= 3 &&
      e.nativeEvent.data != "-" &&
      e.target.value >= 0
    ) {
      setSpinnerNumber(Number(e.target.value.replace(/[^0-9]/g, "")));
      setNumber(Number(e.target.value.replace(/[^0-9]/g, "")));
    }
  };
  /** 한글도 막으려했지만 브라우저에서 한글 자판을 인식하지 못한다고 하여 -만 제한. */
  const checkMinus = (e) => {
    if (e.nativeEvent.key === "-") e.preventDefault();
  };
  const onNumberMinus = () => {
    if (spinnerNumber - 1 >= 0) setSpinnerNumber(spinnerNumber - 1);
  };
  const onNumberPlus = () => {
    if (spinnerNumber + 1 <= 999) setSpinnerNumber(spinnerNumber + 1);
  };

  if (state === "Switch")
    return (
      <SwitchCustomStyle
        size={size}
        defaultChecked
        onChange={onChange}
        title={title}
        disabled={disabled}
      />
    );
  else if (state === "Checkbox")
    return (
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
        />
        {text}
      </CheckboxLabel>
    );
  else
    return (
      <SpinnerWrapper>
        <SpinnerCountImg
          src="asset/images/Icon/basic/minus/M.svg"
          alt="minus"
          onClick={onNumberMinus}
        />
        <SpinnerCountText>
          <input
            type="number"
            onChange={onChangeSpinner}
            onKeyDown={checkMinus}
            placeholder="000"
            min="0"
            max="999"
            value={spinnerNumber || ""}
          />
        </SpinnerCountText>
        <SpinnerCountImg
          src="asset/images/Icon/basic/plus/M.svg"
          alt="plus"
          onClick={onNumberPlus}
        />
      </SpinnerWrapper>
    );
};

Controller.defaultProps = {
  state: "Switch",
  size: "default",
  text: "text",
  disabled: false,
  title: "타이틀",
  onChange: (e) => console.log(e),
};

export default Controller;
