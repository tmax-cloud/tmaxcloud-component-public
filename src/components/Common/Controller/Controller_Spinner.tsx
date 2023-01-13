import { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as minusIcon } from "Icon/basic/minus/M.svg";
import { ReactComponent as plusIcon } from "Icon/basic/plus/M.svg";

export type ControllerSpinnerPropsType = {
  /** 이용가능 여부 */
  disabled?: boolean;
  /**Spinner에 들어갈 숫자(type = Spinner 전용) */
  number?: number;
  /** number 설정하는 함수(type = Spinner 전용) */
  setNumber?: (e) => void;
};
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
const SpinnerCountText = styled.label`
  input {
    all: unset;
    width: 3rem;
    color: ${({ theme }) => theme.color.gray._900};
    ${({ theme }) => theme.font.body2_400};
    cursor: text;

    ::placeholder {
      color: ${({ theme }) => theme.color.gray._400};
    }
    :disabled {
      cursor: auto;
    }
    :disabled ::placeholder {
      color: ${({ theme }) => theme.color.gray._300};
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
const MinusIcon = styled(minusIcon)`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.color.gray._600};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.black._4};
  }
  :active {
    background-color: ${({ theme }) => theme.color.black._10};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray._400};
      pointer-events: none;
    `}
`;
const PlusIcon = styled(plusIcon)`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.color.gray._600};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.black._4};
  }
  :active {
    background-color: ${({ theme }) => theme.color.black._10};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray._400};
      pointer-events: none;
      cursor: not-allowed;
    `}
`;
/** 컨트롤러 */
const Controller_Spinner = ({
  disabled,
  number,
  setNumber,
}: ControllerSpinnerPropsType) => {
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
    if (spinnerNumber - 1 >= 0) {
      setSpinnerNumber(spinnerNumber - 1);
      setNumber(spinnerNumber - 1);
    }
  };
  const onNumberPlus = () => {
    if (spinnerNumber + 1 <= 999) {
      setSpinnerNumber(spinnerNumber + 1);
      setNumber(spinnerNumber + 1);
    }
  };
  return (
    <SpinnerWrapper>
      <MinusIcon onClick={onNumberMinus} disabled={disabled} title="minus" />
      <SpinnerCountText>
        <input
          type="number"
          onChange={onChangeSpinner}
          onKeyDown={checkMinus}
          placeholder="000"
          min="0"
          max="999"
          value={spinnerNumber || ""}
          disabled={disabled}
        />
      </SpinnerCountText>
      <PlusIcon onClick={onNumberPlus} disabled={disabled} title="plus" />
    </SpinnerWrapper>
  );
};

Controller_Spinner.defaultProps = {
  number: 0,
  disabled: true,
  setNumber: (e) => console.log(e),
};

export default Controller_Spinner;
