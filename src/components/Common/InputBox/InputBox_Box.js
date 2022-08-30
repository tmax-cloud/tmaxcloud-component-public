import { Input } from "antd";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const InputBox_BoxWrapper = styled.div`
  width: ${({ size }) => size}rem;
  display: inline-block;
  padding: 1rem 2rem;
  position: relative;
`;
const InputBox_BoxStyle = styled.input`
  width: 100%;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${({ theme, error }) =>
      error ? theme.color.error._100 : theme.color.gray._900};
  background-color: ${({ theme, error }) =>
    error ? theme.color.error._fill : theme.color.white._100};
  padding: 0.55rem 1.2rem 0.55rem 1.2rem;
  ${({ showCount, allowClear }) => {
    if (showCount && allowClear)
      return css`
        padding-right: 8.4rem;
      `;
    else if (!showCount && allowClear)
      return css`
        padding-right: 4rem;
      `;
    else if (showCount && !allowClear)
      return css`
        padding-right: 5.6rem;
      `;
  }}
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme, error }) =>
    error ? theme.color.error._100 : theme.color.gray._900};

  ::placeholder {
    color: ${({ theme }) => theme.color.gray._400};
  }
  :focus-visible {
    outline: none;
    border: 0.1rem solid
      ${({ theme, error }) =>
        error ? theme.color.error._100 : theme.color.gray._900};
  }
`;
const ButtonBox = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  position: absolute;
  right: 2.8rem;
  z-index: 1;
  top: 1.6rem;
`;
const ClearButton = styled.img`
  width: 2rem;
  height: 2rem;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.1;
        `
      : css`
          opacity: 0.3;
        `}
`;
const InputCount = styled.span`
  ${({ theme }) => theme.font.body3_400};
  color: ${({ theme }) => theme.color.gray._400};
`;
const AdviseStyle = styled.div`
  margin-top: 1.1rem;
  margin-bottom: 0.3rem;
  span {
    ${({ theme }) => theme.font.body4_400};
    color: ${({ theme, error }) =>
      error ? theme.color.error._100 : theme.color.gray._500};
    padding-bottom: 0.4rem;
  }
`;

const InputBox_Box = ({
  size,
  showCount,
  maxLength,
  allowClear,
  placeholder,
  error,
  disabled,
  advise,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <InputBox_BoxWrapper size={size}>
      <InputBox_BoxStyle
        value={inputValue}
        showCount={showCount}
        maxLength={maxLength}
        allowClear={allowClear}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        onChange={handleChange}
      />
      <ButtonBox>
        {allowClear && (
          <ClearButton
            src="/asset/images/Icon/content/Status=cancel, Type=fill.svg"
            alt="clearButton"
            onClick={handleClear}
            disabled={disabled}
          />
        )}
        {showCount && (
          <InputCount>
            {inputValue.length}/{maxLength}
          </InputCount>
        )}
      </ButtonBox>
      {error && (
        <AdviseStyle error={error}>
          <span>{advise}</span>
        </AdviseStyle>
      )}
    </InputBox_BoxWrapper>
  );
};

InputBox_Box.propTypes = {
  /** 입력 필드의 폭   */
  size: PropTypes.number,
  /** 입력할 수 있는 최대 글자 수와 현재 입력된 글자 수 표기 여부 */
  showCount: PropTypes.bool,
  /** 입력할 수 있는 최대 글자 수 */
  maxLength: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /** 입력된 내용 삭제 버튼 존재 여부 */
  allowClear: PropTypes.bool,
  /** placeholder 내용 */
  placeholder: PropTypes.string,
  /** 에러 발생 여부 */
  error: PropTypes.bool,
  /** disabled 여부 */
  disabled: PropTypes.bool,
  /** 도움말 또는 에러 메시지 */
  advise: PropTypes.string,
};
InputBox_Box.defaultProps = {
  size: 36,
  showCount: true,
  maxLength: false,
  allowClear: true,
  placeholder: "placeholder",
  error: false,
  disabled: false,
  advise: "",
};

export default InputBox_Box;
