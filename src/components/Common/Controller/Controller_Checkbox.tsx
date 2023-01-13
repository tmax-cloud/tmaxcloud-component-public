import styled from "styled-components";

export type ControllerCheckboxPropsType = {
  /** 이용가능 여부 */
  disabled?: boolean;
  /** 내부 텍스트, 호버 시 노출되는 텍스트(type = Switch,Checkbox 전용)*/
  text?: string;
  /** 상태변경시 동작하는 함수 (type = Switch,Checkbox 전용)*/
  onChange?: (e) => void;
};
const CheckboxLabel = styled.label`
  display: inline-flex;
  gap: 0.8rem;
  height: 2rem;
  align-items: center;
  cursor: pointer;
  ${({ theme }) => theme.font.body2_400};
`;
const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    :not(:checked, :disabled)::after {
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

  &:checked {
    ::after {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.color.marine._500};
      color: white;
      content: url("/asset/images/backgroundIcon/small-check.svg");
    }
  }
  &:disabled {
    ::after {
      cursor: not-allowed;
      border: 0.1rem solid ${({ theme }) => theme.color.gray._400};
      background-color: ${({ theme }) => theme.color.gray._200};
    }
  }
  &:disabled:checked::after {
    background-color: ${({ theme }) => theme.color.gray._400};
  }
`;
/** 컨트롤러 */
const Controller_Checkbox = ({
  text,
  disabled,
  onChange,
}: ControllerCheckboxPropsType) => {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" onChange={onChange} disabled={disabled} />
      {text}
    </CheckboxLabel>
  );
};

Controller_Checkbox.defaultProps = {
  text: "text",
  disabled: false,
  onChange: (e) => console.log(e),
};

export default Controller_Checkbox;
