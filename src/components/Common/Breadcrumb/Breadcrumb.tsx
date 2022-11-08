import * as React from "react";
import styled from "styled-components";
/** 아이콘 타입 및 라벨 */
type propIconType = {
  /** 아이콘 */
  icon: string;
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
};
type propType = {
  /** 최상위 페이지부터 propListType으로 된 배열로 연결 */
  propList: Array<propListType>;
  /** 사용 불가인 경우. 질문필요 */
  disabled: false | true;
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  color: ${({ theme }) => theme.color.gray._600};
  ${({ theme }) => theme.font.body3_400};
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
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  &:last-of-type {
    color: ${({ theme }) => theme.color.gray._900};
    ${({ theme }) => theme.font.body3_500};
    img {
      opacity: 0.8;
    }
  }
`;
/**spec & size 부족 상태 */
const Breadcrumb = ({ propList, disabled }: propType) => {
  return (
    <Wrapper>
      {propList.map((el, index) => (
        <>
          <ItemWrapper key={el.text}>
            <a href={el.href}>
              {el.propIcon && (
                <img src={el.propIcon.icon} alt={el.propIcon.iconLabel} />
              )}
              {el.text}
            </a>
          </ItemWrapper>

          {index + 1 !== propList.length && (
            <img src="/asset/images/Icon/dummy_icon.svg" alt="화살표 아이콘" />
          )}
        </>
      ))}
    </Wrapper>
  );
};

Breadcrumb.defaultProps = {
  propList: [
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text1의 아이콘",
      },
      text: "test1",
      href: "/",
    },
    {
      propIcon: {
        icon: "/asset/images/Icon/dummy_icon.svg",
        iconLabel: "text2의 아이콘",
      },
      text: "test2",
      href: "/",
    },
    {
      text: "test3",
      href: "/",
    },
  ],
};

export default Breadcrumb;
