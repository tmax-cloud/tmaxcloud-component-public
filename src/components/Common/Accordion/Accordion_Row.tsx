import { useState } from "react";
import styled, { css } from "styled-components";
/** 줄형 아코디언 props 타입 */
type Accordion_RowPropsType = {
  /** 타이틀 */
  title: string;
  /** 내용 */
  content: string;
  /** 이용 불가 여부 */
  disabled: boolean;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${({ isClick, theme }) =>
    isClick &&
    css`
      &::before {
        width: 0.2rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-color: ${theme.color.gray._900};
      }
    `};
`;
const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  ${({ theme }) => theme.font.body2_400};
  ${({ isClick, theme }) =>
    isClick ? theme.font.body2_500 : theme.font.body2_400}
  :hover {
    background-color: ${({ theme }) => theme.color.gray._50};
  }
  :active {
    background-color: ${({ theme }) => theme.color.gray._100};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray._900};
      opacity: 0.4;
      &,
      :hover,
      :active {
        background-color: ${({ theme }) => theme.color.gray._400};
      }
    `};
`;
const Icon = styled.div`
  width: 24px;
  margin-left: 2rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  padding: 0 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.color.white._100};

  span {
    ${({ theme }) => theme.font.body3_400};
    color: ${({ theme }) => theme.color.gray._700};
  }
`;
/**줄형 아코디언 */
const Accordion_Row = ({
  title,
  content,
  disabled,
}: Accordion_RowPropsType) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    !disabled && setClick(!click);
  };
  return (
    <Wrapper isClick={click}>
      <TitleArea onClick={onClick} isClick={click} disabled={disabled}>
        <span>{title}</span>
        <Icon>
          {click ? (
            <img src="asset/images/Icon/dummy_icon.svg" alt="close" />
          ) : (
            <img src="asset/images/Icon/dummy_icon.svg" alt="open" />
          )}
        </Icon>
      </TitleArea>
      {click && (
        <Content>
          <span>{content}</span>
        </Content>
      )}
    </Wrapper>
  );
};

Accordion_Row.defaultProps = {
  title: "타이틀",
  content: "내용물",
  disabled: false,
};

export default Accordion_Row;
