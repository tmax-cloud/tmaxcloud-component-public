import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const InputBoxWrapper = styled.div`
  width: ${({ size }) => size}rem;
  display: inline-block;
  padding: 1rem 2rem;
  position: relative;
`;
const InputBoxStyle = styled.input`
  width: 100%;
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme, error }) =>
    error ? theme.color.error._100 : theme.color.gray._900};

  ${({ state, theme, error, showCount, allowClear, disabled }) =>
    state === "Box"
      ? css`
          border: 0.1rem solid
            ${error ? theme.color.error._100 : theme.color.gray._900};
          padding: 0.55rem 1.2rem 0.55rem 1.2rem;
          border-radius: 0.8rem;

          ${() => {
            //Count 및 Clear 버튼 노출 여부에 따른 여백
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
          ${() => {
            if (disabled)
              return css`
                background-color: ${theme.color.gray._200};
                border: none;
                cursor: not-allowed;
              `;
            else if (error)
              return css`
                background-color: ${theme.color.error._fill};
              `;
            else
              return css`
                background-color: ${theme.color.white._100};
              `;
          }}
          :focus-visible {
            outline: none;
            border: 0.1rem solid
              ${error ? theme.color.error._100 : theme.color.gray._900};
          }
        `
      : css`
          border: none;
          padding: 0.55rem 0rem 0.55rem 0rem;
          border-bottom: 0.15rem solid ${
            error ? theme.color.error._100 : theme.color.gray._900
          };
          background-color:${theme.color.white._100}
          ${() => {
            if (showCount && allowClear)
              return css`
                padding-right: 7.2rem;
              `;
            else if (!showCount && allowClear)
              return css`
                padding-right: 2.8rem;
              `;
            else if (showCount && !allowClear)
              return css`
                padding-right: 4.4rem;
              `;
          }}
            ${
              disabled &&
              css`
                cursor: not-allowed;
              `
            }
          :focus-visible {
            outline: none;
            border-bottom: 0.2rem solid ${
              error ? theme.color.error._100 : theme.color.gray._900
            };
          }
        `}
  ::placeholder {
    color: ${({ theme }) => theme.color.gray._400};
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

const InputBox = ({
  state,
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
    <InputBoxWrapper size={size}>
      <InputBoxStyle
        state={state}
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
    </InputBoxWrapper>
  );
};

InputBox.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Box", "Line"]),
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
InputBox.defaultProps = {
  state: "Box",
  size: 36,
  showCount: false,
  maxLength: false,
  allowClear: false,
  placeholder: "placeholder",
  error: false,
  disabled: false,
  advise: "",
};

export default InputBox;
