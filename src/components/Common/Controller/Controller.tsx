import { Switch, Radio, Checkbox } from "antd";
import styled from "styled-components";

type ControllerPropTypes = {
  /** 타입 */
  state: "Switch" | "Radio" | "Checkbox" | "Spinner";
  /** 크기(type = Switch전용) */
  size: "small" | "default";
  /** 내부 텍스트 */
  text: string;
  /** 이용가능 여부 */
  disabled: boolean;
  /** 호버 시 노출되는 텍스트 */
  title: string;
};
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
const RadioCustomStyle = styled(Radio)``;

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
const SpinnerCountImg = styled.img``;
const SpinnerCountText = styled.div`
  input {
    all: unset;
    width: 3rem;
    ${({ theme }) => theme.font.body2_400};
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
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
}: ControllerPropTypes) => {
  const onChange = (checked) => {
    console.log(checked);
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
  else if (state === "Radio")
    return (
      <RadioCustomStyle onChange={onChange} disabled={disabled}>
        {text}
      </RadioCustomStyle>
    );
  else if (state === "Checkbox")
    return (
      <Checkbox onChange={onChange} disabled={disabled}>
        {text}
      </Checkbox>
    );
  else
    return (
      <SpinnerWrapper>
        <SpinnerCountImg src="asset/images/Icon/dummy_icon.svg" alt="minus" />
        <SpinnerCountText>
          <input type="number" />
        </SpinnerCountText>
        <SpinnerCountImg src="asset/images/Icon/dummy_icon.svg" alt="plus" />
      </SpinnerWrapper>
    );
};

Controller.defaultProps = {
  state: "Switch",
  size: "default",
  text: "text",
  disabled: false,
  title: "타이틀",
};

export default Controller;
