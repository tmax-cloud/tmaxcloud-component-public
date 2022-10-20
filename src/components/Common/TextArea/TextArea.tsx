import React from "react";
import styled, { css } from "styled-components";

type TextAreaPropsType = {
  /** 텍스트가 변경되는 경우 발생하는 함수 */
  onChange: (e: HTMLTextAreaElement) => void;
  /** 에러 발생 여부 */
  error: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 사용 불가 여부 체크 */
  disabled: boolean;
};

const TextareaStyle = styled.textarea`
  display: block;
  resize: auto;
  min-width: 32rem;
  min-height: 11rem;
  padding: 1.2rem 1.2rem 0.1rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1.4rem;
  ${({ theme }) => theme.font.body2_400};
  ${({ theme, error, disabled }) => {
    if (error)
      return css`
        background-color: ${theme.color.error._fill};
        color: ${theme.color.error._100};
        border: 0.1rem solid ${theme.color.error._100};
        :focus-visible {
          outline: none;
          border: 0.1rem solid ${theme.color.error._100};
        }
      `;
    else if (disabled)
      return css`
        background-color: ${theme.color.gray._100};
        color: ${theme.color.gray._400};
        border: 0.1rem solid ${theme.color.gray._300};
        :focus-visible {
          outline: none;
          border: 0.1rem solid ${theme.color.gray._900};
        }
      `;
    else
      return css`
        color: ${theme.color.gray._900};
        border: 0.1rem solid ${theme.color.gray._300};
        :focus-visible {
          outline: none;
          border: 0.1rem solid ${theme.color.gray._900};
        }
      `;
  }}
`;

const ErrorMessageStyle = styled.div`
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.error._100};
`;

const TextArea = ({
  onChange,
  error,
  errorMessage,
  disabled,
}: TextAreaPropsType) => {
  return (
    <>
      <div>
        <TextareaStyle onChange={onChange} error={error} disabled={disabled} />
      </div>
      <ErrorMessageStyle>{error && errorMessage}</ErrorMessageStyle>
    </>
  );
};

TextArea.defaultProps = {
  onChange: (e) => console.log(e.target.value),
  error: false,
  errorMessage: "error",
  disabled: false,
};

export default TextArea;
