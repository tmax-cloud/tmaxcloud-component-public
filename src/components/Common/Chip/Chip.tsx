import styled, { css } from "styled-components";
type ChipPropsType = {
  /** 타입 */
  state: "Default" | "Input" | "Filter";
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon?: string;
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image?: string;
  /** 텍스트 */
  text: string;
  /** 제거 버튼 활성화 여부. Input 타입은 상시, Filter 타입은 선택형*/
  isCloseAble: boolean;
  /** 제거 버튼 클릭 시 이벤트 */
  handleCloseButton: () => void;
};
const ChipWrapper = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  ${({ theme, state, icon, image, isCloseAble }) => {
    if (state === "Filter") {
      return css`
        height: 2.8rem;
        background-color: ${theme.color.blueGray._100};
        color: ${theme.color.gray._900};
        ${theme.font.detail1_400}
        border-radius: 100px;
        gap: 0.4rem;
        padding-right: ${isCloseAble ? ".8rem" : "1.2rem"};
        padding-left: ${((icon || image) && ".8rem") || "1.2rem"};
        :hover {
          background-color: ${theme.color.blueGray._150};
        }
        :target,
        :focus {
          background-color: ${theme.color.blueGray._200};
        }
      `;
    } else if (state === "Input") {
      return css`
        height: 2.8rem;
        background-color: ${theme.color.white._100};
        border: 1px solid ${theme.color.gray._300};
        color: ${theme.color.gray._900};
        ${theme.font.body3_400}
        border-radius: 8px;
        gap: 8px;
        padding-right: ${isCloseAble ? ".8rem" : "1.2rem"};
        padding-left: ${(image && ".4rem") || (icon && ".8rem") || "1.2rem"};
        :hover {
          background-color: ${theme.color.gray._50};
        }
        :target,
        :focus {
          background-color: ${theme.color.gray._100};
        }
      `;
    } else {
      return css`
        height: 2.8rem;
        background-color: ${theme.color.white._100};
        border: 1px solid ${theme.color.gray._300};
        color: ${theme.color.gray._900};
        ${theme.font.body3_400}
        border-radius: 8px;
        gap: 8px;
        padding-right: ${isCloseAble ? ".8rem" : "1.2rem"};
        padding-left: ${(image && ".4rem") || (icon && ".8rem") || "1.2rem"};
        :hover {
          background-color: ${theme.color.gray._50};
        }
        :target,
        :focus {
          background-color: ${theme.color.gray._100};
        }
      `;
    }
  }}
`;

const CloseIcon = styled.img`
  opacity: 0.3;
`;
/**
 * Default는 image,Icon 사용가능
 * Input은과 Filter는 image,Icon, 사용가능 및 색이 어두움
 */
const Chip = ({
  state,
  icon,
  image,
  text,
  isCloseAble,
  handleCloseButton,
}: ChipPropsType) => {
  return (
    <ChipWrapper
      state={state}
      icon={icon}
      image={image}
      isCloseAble={isCloseAble}
    >
      {!image && icon && <img src={icon} alt="제거" />}
      {!icon && image && <img src={image} alt="이미지" />}
      {text}
      {isCloseAble && (
        <CloseIcon
          src="/asset/images/Icon/dummy_icon.svg"
          alt="닫기버튼"
          onClick={handleCloseButton}
          onKeyUp={handleCloseButton}
        />
      )}
    </ChipWrapper>
  );
};

Chip.defaultProps = {
  state: "Default",
  text: "Chip",
  icon: "/asset/images/Icon/dummy_icon.svg",
  image: "/asset/images/Icon/dummy_icon.svg",
  isCloseAble: false,
  handleCloseButton: () => console.log("handleCloseButton"),
};

export default Chip;
