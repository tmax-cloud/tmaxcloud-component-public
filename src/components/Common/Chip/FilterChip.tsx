import styled, { css } from "styled-components";
import { ReactComponent as cancelIcon } from "Icon/content/circle_button/cancel/fill.svg";

export type FilterChipPropsType = {
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon?: React.ReactNode;
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image?: React.ReactNode;
  /** 텍스트 */
  text: string;
  /** 제거 버튼 활성화 여부. Input 타입은 상시, Filter 타입은 선택형*/
  isCloseAble: boolean;
  /** 제거 버튼 클릭 시 이벤트 */
  onClick?: () => void;
};
const FilterChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  gap: 0.4rem;
  height: 2.8rem;
  ${({ theme, image, isCloseAble, icon }) => css`
    background-color: ${theme.color.blueGray._100};
    color: ${theme.color.gray._900};
    ${theme.font.detail1_400};

    padding-right: ${isCloseAble ? ".8rem" : "1.2rem"};
    padding-left: ${((icon || image) && ".8rem") || "1.2rem"};
    :hover {
      background-color: ${theme.color.blueGray._150};
    }
    :target,
    :focus {
      background-color: ${theme.color.blueGray._200};
    }
  `}
`;

const CancelIcon = styled(cancelIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.gray._400};
  :hover {
    color: ${({ theme }) => theme.color.gray._700};
  }
  :active {
    color: ${({ theme }) => theme.color.gray._900};
  }
`;
/**
 * Default는 image,Icon 사용가능
 * Input은과 Filter는 image,Icon, 사용가능 및 색이 어두움
 */
const FilterChip = ({
  icon,
  image,
  text,
  isCloseAble,
  onClick,
}: FilterChipPropsType) => {
  return (
    <FilterChipWrapper icon={icon} image={image} isCloseAble={isCloseAble}>
      {icon || image || true}
      {text}
      {isCloseAble && <CancelIcon onClick={onClick} />}
    </FilterChipWrapper>
  );
};

FilterChip.defaultProps = {
  text: "Chip",
  icon: false,
  image: false,
  onClick: () => console.log("handleCloseButton"),
};

export default FilterChip;
