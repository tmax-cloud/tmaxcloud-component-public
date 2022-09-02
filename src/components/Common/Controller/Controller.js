import PropTypes from "prop-types";
import { Switch, Radio, Checkbox } from "antd";
import styled from "styled-components";

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
  }
`;

const RadioCustomStyle = styled(Radio)``;

const Controller = ({ state, size, text, disabled }) => {
  const onChange = (checked) => {
    console.log(checked);
  };

  if (state === "Switch")
    return (
      <SwitchCustomStyle
        size={size}
        defaultChecked
        onChange={onChange}
        title="호 안에 수류탄"
        disabled={disabled}
      />
    );
  else if (state === "Radio")
    return (
      <RadioCustomStyle onChange={onChange} disabled={disabled}>
        {text}
      </RadioCustomStyle>
    );
  else
    return (
      <Checkbox onChange={onChange} disabled={disabled}>
        {text}
      </Checkbox>
    );
};

Controller.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Switch", "Radio", "Checkbox"]),
  /** 크기(Switch전용) */
  size: PropTypes.oneOf(["small", "default"]),
  /** 내부 텍스트 */
  text: PropTypes.string,
  /** 이용가능 여부 */
  disabled: PropTypes.bool,
};

Controller.defaultProps = {
  state: "Switch",
  size: "default",
  text: "text",
  disabled: false,
};

export default Controller;
