import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

type ScrollPropsType = {
  /** 타입 */
  state: "Black" | "White" | "Dim";
};

const Wrapper = styled.div`
  width: 12rem;
  height: 36rem;
  background-color: ${({ theme, state }) => {
    if (state === "Black") return theme.color.gray._900;
    else if (state === "White") return theme.color.white._100;
    else return theme.color.black._50;
  }};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2.2rem;
    height: 2.2rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme, state }) => {
      if (state === "Black") return theme.color.gray._400;
      else if (state === "White") return theme.color.gray._200;
      else return theme.color.white._100;
    }};
    background-clip: padding-box;
    border-radius: 1.4rem;
    border-width: 0.8rem;
    border-style: solid;
    border-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
`;

const ScrollHeight = styled.div`
  width: 24rem;
  height: 72rem;
`;

const BlackGlobalStyle = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.color.gray._900};
  }
  ::-webkit-scrollbar {
    width: 2.2rem;    
    background-color:  ${({ theme }) => theme.color.gray._900};;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray._400};
    background-clip: padding-box;
    border-radius: 1.4rem;
    border-width: 0.8rem;
    border-style: solid;
    border-color: transparent;
  }
  ::-webkit-scrollbar-corner{
    display:none;
  }
`;
const WhiteGlobalStyle = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.color.white._100};
}
  ::-webkit-scrollbar {
    width: 2.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray._200};
    background-clip: padding-box;
    border-radius: 1.4rem;
    border-width: 0.8rem;
    border-style: solid;
    border-color: transparent;
  }
  ::-webkit-scrollbar-corner{
    display:none;
  }
`;
const DimGlobalStyle = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.color.black._50};
}
  ::-webkit-scrollbar {
    width: 2.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.white._100};
    background-clip: padding-box;
    border-radius: 1.4rem;
    border-width: 0.8rem;
    border-style: solid;
    border-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
`;
/**크롬, 사파리, 오페라 브라우저 한정. 여백이 상단에만 존재할 시 radius가 제대로 먹히지 않아 아래에도 동일하게 8px 부여(실제 적용은 .8rem). 실제 scroll은 테스트 필요. */
const SBScroll = ({ state }: ScrollPropsType) => {
  return (
    <Wrapper state={state}>
      <ScrollHeight>스토리북 테스트 영역</ScrollHeight>
    </Wrapper>
  );
};

const Scroll = ({ state }: ScrollPropsType) => {
  if (state === "Black") return <BlackGlobalStyle />;
  else if (state === "White") return <WhiteGlobalStyle />;
  else return <DimGlobalStyle />;
};

SBScroll.defaultProps = {
  state: "Black",
};

export { SBScroll, Scroll };
