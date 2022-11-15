import styled, { css } from "styled-components";
import { HTMLAttributes, useState } from "react";
import { ReactComponent as cancelIcon } from "Icon/content/circle_button/cancel/fill.svg";
type InputBoxPropsType = HTMLAttributes<HTMLInputElement> & {
  /** 타입 */
  state: "Box" | "Line" | "Fill";
  /** 입력할 수 있는 최대 글자 수와 현재 입력된 글자 수 표기 여부 */
  showCount: boolean;
  /** 입력할 수 있는 최대 글자 수 */
  maxLength: number | boolean;
  /** 입력된 내용 삭제 버튼 존재 여부 */
  allowClear: boolean;
  /** placeholder 내용 */
  placeholder: string;
  /** 에러 발생 여부 */
  error: boolean;
  /** disabled 여부 */
  disabled: boolean;
  /** 도움말 또는 에러 메시지 */
  advise: string;
  /** 입력값 */
  value: string;
  /** 입력 값 초기화 이벤트 */
  handleClear: () => void;
};

const InputBoxWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
`;
const WithoutAdvise = styled.div`
  position: relative;
`;
const InputBoxStyle = styled.input`
  width: 100%;
  height: 3.2rem;
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme, error }) =>
    error ? theme.color.error._100 : theme.color.gray._900};
  ${({ state, theme, error, showCount, allowClear, disabled }) => {
    if (state === "Box")
      return css`
        border: 0.1rem solid
          ${error ? theme.color.error._100 : theme.color.gray._300};
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
        :hover {
          border: 0.1rem solid
            ${error ? theme.color.error._100 : theme.color.gray._500};
        }
        :focus-visible {
          border: 0.1rem solid
            ${error ? theme.color.error._100 : theme.color.gray._900};
        }
      `;
    else if (state === "Line")
      return css`
          border: none;
          padding: 0.55rem 0rem 0.55rem 0rem;
          border-bottom: 0.15rem solid ${
            error ? theme.color.error._100 : theme.color.gray._300
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
           :hover {
             border-bottom: 0.2rem solid
               ${error ? theme.color.error._100 : theme.color.gray._900};
           }
           :focus-visible {
           border-bottom: 0.2rem solid ${
             error ? theme.color.error._100 : theme.color.gray._900
           };
          }
          ${
            disabled &&
            css`
              cursor: not-allowed;
            `
          }
        `;
    else if (state === "Fill")
      return css`
        padding: 0.55rem 1.2rem 0.55rem 1.2rem;
        border-radius: 0.8rem;
        border: none;

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
              border: 0.1rem solid ${theme.color.error._100};
            `;
          else
            return css`
              background-color: ${theme.color.gray._100};
            `;
        }}
        :hover {
          background-color: ${theme.color.gray._150};
        }
        :focus-visible {
          outline: 0.1rem solid
            ${error ? theme.color.error._100 : theme.color.gray._900};
        }
      `;
  }}
  ::placeholder {
    color: ${({ theme }) => theme.color.gray._400};
  }
`;
const ButtonBox = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  right: 1.2rem;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
`;
const InputCount = styled.span`
  ${({ theme }) => theme.font.body3_400};
  color: ${({ theme }) => theme.color.gray._400};
  height: 1.8rem;
`;
const AdviseStyle = styled.div`
  ${({ theme }) => theme.font.body4_400};
  margin-top: 1.1rem;
  margin-bottom: 0.3rem;
  span {
    color: ${({ theme, error }) =>
      error ? theme.color.error._100 : theme.color.gray._500};
    padding-bottom: 0.4rem;
  }
`;
const CancelIcon = styled(cancelIcon)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.gray._400};
  :hover {
    color: ${({ theme }) => theme.color.gray._700};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray._300};
      pointer-events: none;
    `}
`;
const SBInputBox = (args: InputBoxPropsType) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    console.log("초기화");
  };
  return (
    <InputBox
      {...args}
      value={value}
      onChange={onChange}
      handleClear={handleClear}
    />
  );
};
const InputBox = ({
  state,
  showCount,
  maxLength,
  allowClear,
  placeholder,
  error,
  disabled,
  advise,
  value,
  handleClear,
  ...props
}: InputBoxPropsType) => {
  return (
    <InputBoxWrapper>
      <WithoutAdvise>
        <InputBoxStyle
          state={state}
          value={value}
          showCount={showCount}
          maxLength={maxLength}
          allowClear={allowClear}
          placeholder={placeholder}
          error={error}
          disabled={disabled}
          {...props}
        />
        <ButtonBox>
          {allowClear && (
            <CancelIcon onClick={handleClear} disabled={disabled} />
          )}
          {showCount && (
            <InputCount>
              {value.length}/{maxLength}
            </InputCount>
          )}
        </ButtonBox>
      </WithoutAdvise>
      {error && (
        <AdviseStyle error={error}>
          <span>{advise}</span>
        </AdviseStyle>
      )}
    </InputBoxWrapper>
  );
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
  onChange: (e) => console.log(e),
  handleClear: () => console.log("초기화"),
};

export { SBInputBox, InputBox };
