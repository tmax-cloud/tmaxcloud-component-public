import { useState } from "react";
import styled, { css } from "styled-components";
/** 박스형 아코디언 props 타입 */
type Accordion_BoxPropsType = {
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
  border-bottom: 1px solid ${({ theme }) => theme.color.gray._300};
`;
const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 4.8rem;
  padding-left: 2rem;
  padding-right: 2rem;
  ${({ theme }) => theme.font.body2_400};
  background-color: ${({ theme, isClick }) =>
    isClick ? theme.color.gray._50 : theme.color.white._100};

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
  width: 2.4rem;
  margin-left: 2rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  padding: 0 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.color.gray._50};
  span {
    ${({ theme }) => theme.font.body3_400};
    color: ${({ theme }) => theme.color.gray._700};
  }
`;
/** 박스형 아코디언 */
const Accordion_Box = ({
  title,
  content,
  disabled,
}: Accordion_BoxPropsType) => {
  const [click, setClick] = useState(false);
  /** 클릭이벤트 */
  const onClick = (): void => {
    if (!disabled) {
      setClick(!click);
    }
  };
  return (
    <Wrapper>
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

Accordion_Box.defaultProps = {
  title: "타이틀",
  content: "내용물",
  disabled: false,
};

export default Accordion_Box;
