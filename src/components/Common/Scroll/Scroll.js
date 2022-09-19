import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

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
`;

const ScrollHeight = styled.div`
  width: 24rem;
  height: 72rem;
`;

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${({ theme, state }) => {
      if (state === "Black") return theme.color.gray._900;
      else if (state === "White") return theme.color.white._100;
      else return theme.color.black._50;
    }};
}
  ::-webkit-scrollbar {
    width: 2.2rem;
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
`;

const SBScroll = ({ state }) => {
  return (
    <Wrapper state={state}>
      <ScrollHeight>스토리북 테스트 영역</ScrollHeight>
    </Wrapper>
  );
};

const Scroll = ({ state }) => {
  return (
    <>
      <GlobalStyle state={state} />
    </>
  );
};

SBScroll.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Black", "White", "Dim"]),
};

SBScroll.defaultProps = {
  state: "Black",
};

export { SBScroll, Scroll };
