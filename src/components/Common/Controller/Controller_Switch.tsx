import { Switch } from "antd";
import styled from "styled-components";

export type ControllerSwitchPropsType = {
  /** 이용가능 여부 */
  disabled?: boolean;
  /** 내부 텍스트, 호버 시 노출되는 텍스트(type = Switch,Checkbox 전용)*/
  text?: string;
  /** 크기(type = Switch전용) */
  size?: "small" | "default";
  /** 상태변경시 동작하는 함수 (type = Switch,Checkbox 전용)*/
  onChange?: (e) => void;
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
/** 컨트롤러 */
const Controller_Switch = ({
  size,
  text,
  disabled,
  onChange,
}: ControllerSwitchPropsType) => {
  return (
    <SwitchCustomStyle
      size={size}
      onChange={onChange}
      title={text}
      disabled={disabled}
    />
  );
};

Controller_Switch.defaultProps = {
  state: "Switch",
  size: "default",
  text: "text",
  disabled: false,
  onChange: (e) => console.log(e),
};

export default Controller_Switch;
