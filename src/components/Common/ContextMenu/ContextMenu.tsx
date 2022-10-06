import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

/** 1Deps 타이틀 및 해당 타이틀에 속한 MenuItem*/
type contextMenuPropsType = {
  /** 타이틀 */
  title: string;
  /** 타이틀에 속한 MenuItem */
  contextMenuItemProps: Array<contextMenuItemPropsType>;
};
/** MenuItem props */
type contextMenuItemPropsType = {
  /** 접두 영역. */
  prefixIcon?: "Icon" | "Checkbox" | "Label";
  /** 해당 MenuItem의 텍스트 타이틀 */
  itemTitle: string;
  /** 화살표 존재 여부 */
  contextMenuItemChildProps?: Array<contextMenuPropsType>;
};
type contextMenuItemChildPropsType = {
  /** 좌측에 렌더해야하는지 */
  isLeft: boolean;
  /** 하위 Deps 메뉴 */
  contextMenuItemChildProps: Array<contextMenuPropsType>;
};

const Wrapper = styled.div`
  width: inherit;
  position: relative;
`;
const ContextMenuWrapper = styled.div`
  top: 0.8rem;
  width: inherit;
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
/** 메뉴 전체 틀 and 1뎁스 */
export const ContextMenu = ({
  title,
  contextMenuItemProps,
}: contextMenuPropsType) => {
  console.log(title, contextMenuItemProps);

  return (
    <Wrapper>
      <ContextMenuWrapper>
        <Title>{title}</Title>
        {contextMenuItemProps.map((data) => (
          <ContextMenuItem {...data} key={data.itemTitle} />
        ))}
      </ContextMenuWrapper>
    </Wrapper>
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
              <img src="/asset/images/Icon/dummy_icon.svg" alt="Icon" />
            </PrefixIconWrapper>
          ),
          Checkbox: (
            <PrefixIconWrapper>
              <img src="/asset/images/Icon/dummy_icon.svg" alt="Checkbox" />
            </PrefixIconWrapper>
          ),
          Label: (
            <PrefixIconWrapper>
              <img src="/asset/images/Icon/dummy_icon.svg" alt="Label" />
            </PrefixIconWrapper>
          ),
        }[prefixIcon]}
      <button>
        <ContextMenuItemTitle>{itemTitle}</ContextMenuItemTitle>
      </button>
      {contextMenuItemChildProps && (
        <ArrowIcon src="/asset/images/Icon/dummy_icon.svg" alt="화살표" />
      )}
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
              <>
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
              </>
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
              <>
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
              </>
            ),
          )}
        </ContextMenuChildWrapper>
      )}
    </div>
  );
};

ContextMenu.defaultProps = {
  title: "기본 타이틀",
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
