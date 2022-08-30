import { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

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
const Accordion_Box = ({ title, content, disabled }) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
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
            <img
              src="asset/images/Icon/arrow/Direction=up, Size=Medium.svg"
              alt="close"
            />
          ) : (
            <img
              src="asset/images/Icon/arrow/Direction=down, Size=Medium.svg"
              alt="open"
            />
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
Accordion_Box.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
};
Accordion_Box.defaultProps = {
  title: "타이틀",
  content: "내용물",
  disabled: false,
};

export default Accordion_Box;
