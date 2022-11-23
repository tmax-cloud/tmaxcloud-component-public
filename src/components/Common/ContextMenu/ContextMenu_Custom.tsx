import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as rightIcon } from "Icon/arrow/arrow/right/Small.svg";
/** 1Deps 타이틀 및 해당 타이틀에 속한 MenuItem*/
type contextMenuPropsType = {
  /** 타이틀 */
  title: string;
  /** 타이틀에 속한 MenuItem ,
   *  컨텍스트 내부 각 아이템의 앞자리를 선택할 수 있는 prefixIcon ,
   *  각 아이템의 텍스트 부분의 itemTitle ,
   *  해당 아이템 하위의 MenuItem을 나타내는 contextMenuItemChildProps(contextMenuPropsType 배열로 표현)
   */
  contextMenuItemProps: Array<contextMenuItemPropsType>;
  /** 생성될 contextMenu의 X위치. 자동측정*/
  pageX?: number;
  /** 생성될 contextMenu의 Y위치. 자동측정*/
  pageY?: number;
  /** 우측의 여백이 없어 position을 right로 줘야하는지. 자동측정*/
  isRight?: boolean;
};
/** MenuItem props */
type contextMenuItemPropsType = {
  /** 접두 영역. */
  prefixIcon?: "Icon" | "Checkbox" | "Label";
  /** 해당 MenuItem의 텍스트 타이틀 */
  itemTitle: string;
  /** 해당 아이템 하위의 MenuItem*/
  contextMenuItemChildProps?: Array<contextMenuPropsType>;
};
type contextMenuItemChildPropsType = {
  /** 좌측에 렌더해야하는지 */
  isLeft: boolean;
  /** 하위 Deps MenuItem을 */
  contextMenuItemChildProps: Array<contextMenuPropsType>;
};
const SBContextMenuTriggerWrapper = styled.div`
  width: 10rem;
  height: 20rem;
  position: relative;
  background-color: skyblue;
  color: black;
`;
const SBButtonWrapper = styled.div`
  position: relative;
`;
const SBButton = styled.div`
  background-color: red;
`;
const ContextMenuWrapper = styled.div`
  ${({ isRight, pageX }) =>
    isRight
      ? css`
          right: ${pageX}px;
        `
      : css`
          left: ${pageX}px;
        `}
  top: ${({ pageY }) => (pageY ? `${pageY}px` : `0.8rem`)};
  width: auto;
  min-width: 20rem;
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
const PrefixIconWrapper = styled.div`
  padding-right: 0.8rem;
`;
const RightIcon = styled(rightIcon)`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  right: 0.8rem;
  color: {({ theme })=>theme.color.gray._700};
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
/** 스토리북용 트리거 */
const SBContextMenuTrigger = (args: contextMenuPropsType) => {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ChangeMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const CloseMenu = (e) => {
    if (isMenuOpen && !ref.current.contains(e.target)) setIsMenuOpen(false);
  };
  const keydownEvent = (e) => {
    if (isMenuOpen && e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", CloseMenu);
    document.addEventListener("keydown", keydownEvent);
    return () => {
      document.removeEventListener("mousedown", CloseMenu);
      document.removeEventListener("keydown", keydownEvent);
    };
  });
  return (
    <>
      <SBContextMenuTriggerWrapper ref={ref}>
        배경 외부 클릭시 menu off
        <br />
        <SBButton onClick={ChangeMenuState}>menu 트리거</SBButton>
        <SBButtonWrapper>
          {isMenuOpen && <ContextMenu {...args} />}
        </SBButtonWrapper>
      </SBContextMenuTriggerWrapper>
      <ContextMenuTriggerWithMouse {...args} />
    </>
  );
};
/** ContextMenu의 시작을 맡는 틀 및 1뎁스 */
const ContextMenu = ({
  title,
  contextMenuItemProps,
  pageX,
  pageY,
  isRight,
}: contextMenuPropsType) => {
  return (
    <ContextMenuWrapper pageX={pageX} pageY={pageY} isRight={isRight}>
      <Title>{title}</Title>
      {contextMenuItemProps.map((data) => (
        <ContextMenuItem {...data} key={data.itemTitle} />
      ))}
    </ContextMenuWrapper>
  );
};
/** 마우스 우클릭 시 ContextMenu 생성 컴포넌트 */
const ContextMenuTriggerWithMouse = (args) => {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const CloseMenu = (e) => {
    if (isMenuOpen && !ref.current.contains(e.target)) setIsMenuOpen(false);
  };
  /** 마우스 우클릭 시 노출 함수 */
  const OpenMenuWithMouse = (e) => {
    if (e.which == 3 || e.button == 2) {
      setIsMenuOpen(true);
      handleXPosition(e.pageX);
      setPageY(e.pageY);
      window.oncontextmenu = () => {
        return false;
      };
    }
  };
  /** 좌측,우측 노출 결정하는 함수 */
  const handleXPosition = (xPosition) => {
    if (xPosition + 200 > window.innerWidth) {
      setIsRight(true);
      setPageX(window.innerWidth - xPosition);
    } else {
      setIsRight(false);
      setPageX(xPosition);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", CloseMenu);
    document.addEventListener("contextmenu", OpenMenuWithMouse);
    return () => {
      document.removeEventListener("mousedown", CloseMenu);
      document.removeEventListener("contextmenu", OpenMenuWithMouse);
    };
  });
  return (
    isMenuOpen && (
      <div ref={ref}>
        <ContextMenu {...args} pageX={pageX} pageY={pageY} isRight={isRight} />
      </div>
    )
  );
};

/** 메뉴의 한 리스트 아이템 */
const ContextMenuItem = ({
  prefixIcon,
  itemTitle,
  contextMenuItemChildProps,
}: contextMenuItemPropsType) => {
  const WrapperRef = useRef(null);
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
      {prefixIcon &&
        {
          Icon: (
            <PrefixIconWrapper>
              <img
                src="/asset/images/backgroundIcon/dummy_icon.svg"
                alt="Icon"
              />
            </PrefixIconWrapper>
          ),
          Checkbox: (
            <PrefixIconWrapper>
              <img
                src="/asset/images/backgroundIcon/dummy_icon.svg"
                alt="Checkbox"
              />
            </PrefixIconWrapper>
          ),
          Label: (
            <PrefixIconWrapper>
              <img
                src="/asset/images/backgroundIcon/dummy_icon.svg"
                alt="Label"
              />
            </PrefixIconWrapper>
          ),
        }[prefixIcon]}
      <button>
        <ContextMenuItemTitle>{itemTitle}</ContextMenuItemTitle>
      </button>
      {contextMenuItemChildProps && <RightIcon />}
      {contextMenuItemChildProps && view && (
        <ContextMenuItemChild
          isLeft={isLeft}
          contextMenuItemChildProps={contextMenuItemChildProps}
        />
      )}
    </ContextMenuItemWrapper>
  );
};

/** 하위 Deps 메뉴 */
const ContextMenuItemChild = ({
  isLeft,
  contextMenuItemChildProps,
}: contextMenuItemChildPropsType) => {
  const ref = useRef(null);
  const [overHeight, setOverHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleTopSize = () => {
    const rect = ref.current.getBoundingClientRect();
    const overSize = rect.bottom - window.innerHeight + 12;
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
          {contextMenuItemChildProps.map(
            (contextMenuProps: contextMenuPropsType) => (
              <div key={contextMenuProps.title}>
                <Title>{contextMenuProps.title}</Title>
                <Divider />
                {contextMenuProps.contextMenuItemProps.map(
                  (contextMenuItemChildProps: contextMenuItemPropsType) => (
                    <ContextMenuItem
                      {...contextMenuItemChildProps}
                      key={contextMenuItemChildProps.itemTitle}
                    />
                  ),
                )}
              </div>
            ),
          )}
        </ContextMenuChildWrapper_R>
      ) : (
        <ContextMenuChildWrapper
          ref={ref}
          overHeight={overHeight}
          Loading={loading}
        >
          {contextMenuItemChildProps.map(
            (contextMenuProps: contextMenuPropsType) => (
              <div key={contextMenuProps.title}>
                <Title>{contextMenuProps.title}</Title>
                <Divider />
                {contextMenuProps.contextMenuItemProps.map(
                  (contextMenuItemChildProps: contextMenuItemPropsType) => (
                    <ContextMenuItem
                      {...contextMenuItemChildProps}
                      key={contextMenuItemChildProps.itemTitle}
                    />
                  ),
                )}
              </div>
            ),
          )}
        </ContextMenuChildWrapper>
      )}
    </div>
  );
};
ContextMenu.defaultProps = {
  title: "기본 타이틀",
  pageX: 0,
  isRight: false,
  contextMenuItemProps: [
    {
      prefixIcon: "Icon",
      itemTitle: "아이콘1",
    },
    {
      prefixIcon: "Checkbox",
      itemTitle: "체크박스1",
    },
    {
      prefixIcon: "Label",
      itemTitle: "라벨1",
      contextMenuItemChildProps: [
        {
          title: "타이틀3",
          contextMenuItemProps: [
            {
              prefixIcon: "Icon",
              itemTitle: "아이콘3",
            },
            {
              prefixIcon: "Checkbox",
              itemTitle: "체크박스3",
            },
            {
              prefixIcon: "Label",
              itemTitle: "라벨3",
            },
            {
              itemTitle: "아무것도없는3",
            },
          ],
        },
      ],
    },
    {
      itemTitle: "아무것도없는1",
    },
  ],
};
export { SBContextMenuTrigger, ContextMenuTriggerWithMouse, ContextMenu };
