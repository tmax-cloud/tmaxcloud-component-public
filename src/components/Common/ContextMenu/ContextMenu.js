import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Wrapper = styled.div`
  width: inherit;
  position: relative;
`;

const ContextMenuWrapper = styled.div`
  top: 0.8rem;
  width: inherit;
  position: absolute;
  z-index: 333;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;
const ContextMenuItemWrapper = styled.div`
  width: inherit;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.8rem 0 2rem;
  :hover {
    background-color: ${({ theme }) => theme.color.gray._100};
  }
  :disabled {
    background-color: ${({ theme }) => theme.color.white._100};
    opacity: 0.2;
  }
`;
const ContextMenuItemTitle = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.body3_400};
`;
const ContextMenuChildWrapper = styled.div`
  ${({ Loading, overHeight }) =>
    Loading
      ? css`
          visibility: hidden;
        `
      : css`
          visibility: visible;
          top: ${-0.8 - overHeight}rem;
        `}
  left: 100%;
  width: 100%;
  position: absolute;
  z-index: 333;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;
const ContextMenuChildWrapper_R = styled.div`
  ${({ Loading, overHeight }) =>
    Loading
      ? css`
          visibility: hidden;
        `
      : css`
          visibility: visible;
          top: ${-0.8 - overHeight}rem;
        `}
  right:100%;
  width: 100%;
  position: absolute;
  z-index: 333;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;
const AdviseIconWrapper = styled.div`
  padding-right: 0.8rem;
`;
const ArrowIcon = styled.img`
  position: absolute;
  right: 0;
`;
const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray._200};
`;
const Title = styled.div`
  color: ${({ theme }) => theme.color.gray._500};
  ${({ theme }) => theme.font.detail1_700};
  width: 100%;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.8rem 0 2rem;
`;
/**메뉴 전체 틀 and 1뎁스 */
export const ContextMenu = () => {
  return (
    <Wrapper>
      <ContextMenuWrapper>
        <Title>타이틀이에요</Title>

        {/* 맵핑예정 */}
        <ContextMenuItem />
        <ContextMenuItem />
        <ContextMenuItem />
      </ContextMenuWrapper>
    </Wrapper>
  );
};
// 메뉴의 한 리스트 아이템
const ContextMenuItem = () => {
  const WrapperRef = useRef();
  const [view, setView] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const handlePosition = () => {
    const rect = WrapperRef.current.getBoundingClientRect();
    rect.right + rect.width > window.innerWidth
      ? setIsLeft(true)
      : setIsLeft(false);
  };
  useEffect(() => {
    handlePosition();
  }, []);
  return (
    <ContextMenuItemWrapper
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
      ref={WrapperRef}
    >
      <AdviseIconWrapper>
        <img src="" alt="아이콘" />
      </AdviseIconWrapper>
      <button>
        <ContextMenuItemTitle>아이템</ContextMenuItemTitle>
      </button>
      <ArrowIcon src="" alt="화살표" />
      {view && <ContextMenuChild isLeft={isLeft} />}
    </ContextMenuItemWrapper>
  );
};
/** 리스트 아이템의 하위 아이템이자 2뎁스 이후 리스트아이템의 하위 아이템의 하위 아이템의...*/
const ContextMenuChild = ({ isLeft }) => {
  const ref = useRef();
  const [overHeight, setOverHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleTopSize = () => {
    const rect = ref.current.getBoundingClientRect();
    const overSize = rect.bottom - window.innerHeight + 12;
    console.log(rect);
    if (overSize > 0) {
      setOverHeight(overSize / 10);
      setLoading(false);
    } else setLoading(false);
  };

  useEffect(() => {
    handleTopSize();
  }, []);

  return (
    <div>
      {isLeft ? (
        <ContextMenuChildWrapper_R
          ref={ref}
          overHeight={overHeight}
          Loading={loading}
        >
          <Title>타이틀이에요</Title>

          <ContextMenuItem />
          <ContextMenuItem />
          <Divider />
          <ContextMenuItem />
        </ContextMenuChildWrapper_R>
      ) : (
        <ContextMenuChildWrapper
          ref={ref}
          overHeight={overHeight}
          Loading={loading}
        >
          <Title>타이틀이에요</Title>

          <ContextMenuItem />
          <Divider />
          <ContextMenuItem />
          <ContextMenuItem />
        </ContextMenuChildWrapper>
      )}
    </div>
  );
};
