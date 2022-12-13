import * as React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as rightIcon } from "Icon/arrow/arrow/right/Medium.svg";

/** 아이콘 타입 및 라벨 */
type propIconType = {
  /** 아이콘 */
  icon: React.ReactNode;
  /** 아이콘 불러오기 실패시 노출될 텍스트 */
  iconLabel: string;
};
/** 각 요소에 들어갈 텍스트 및 링크 타입 */
type propListType = {
  propIcon?: propIconType;
  /** 노출될 텍스트 */
  text: string;
  /** 이동할 페이지 링크 */
  href: string;
  /** 사용 불가인 경우. */
  disabled: boolean;
};
type propType = {
  /** 최상위 페이지부터 propListType으로 된 배열로 연결 */
  propList: Array<propListType>;
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  color: ${({ theme }) => theme.color.gray._600};
  ${({ theme }) => theme.font.body3_400};
  align-items: center;
`;
const ItemWrapper = styled.div`
  a {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    &:hover,
    &:focus-visible,
    &:target {
      color: ${({ theme }) => theme.color.gray._800};
      img {
        opacity: 0.7;
      }
    }
    &:active {
      color: ${({ theme }) => theme.color.gray._900};
      img {
        opacity: 0.8;
      }
    }
    img {
      width: 1.4rem;
      height: 1.4rem;
      opacity: 0.5;
    }
  }
  ${({ disabled }) =>
    disabled &&
    css`
      a {
        color: ${({ theme }) => theme.color.gray._400};
        pointer-events: none;
        img {
          opacity: 0.4;
        }
      }
    `}

  &:last-of-type {
    color: ${({ theme }) => theme.color.gray._900};
    ${({ theme }) => theme.font.body3_500};
    img {
      opacity: 0.8;
    }
  }
`;
const RightIcon = styled(rightIcon)`
  width: 1.2rem;
  height: 1.2rem;
  color: ${({ theme }) => theme.color.gray._600};
`;
const Breadcrumb = ({ propList }: propType) => {
  console.log();

  return (
    <Wrapper>
      {propList.map((el, index) => (
        <>
          <ItemWrapper key={el.text} disabled={el.disabled}>
            <a href={el.href}>
              {el.propIcon && el.propIcon.icon}
              {el.text}
            </a>
          </ItemWrapper>

          {index + 1 !== propList.length && <RightIcon />}
        </>
      ))}
    </Wrapper>
  );
};

Breadcrumb.defaultProps = {
  propList: [
    {
      propIcon: {
        icon: "asset/images/Icon/dummy_icon.svg",
        iconLabel: "text1의 아이콘",
      },
      text: "test1",
      href: "/",
      disabled: false,
    },
    {
      propIcon: {
        icon: "asset/images/Icon/dummy_icon.svg",
        iconLabel: "text2의 아이콘",
      },
      text: "test2",
      href: "/",
      disabled: false,
    },
    {
      text: "test3",
      href: "/",
      disabled: false,
    },
  ],
};

export default Breadcrumb;
