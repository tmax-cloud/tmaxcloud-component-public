import PropTypes from "prop-types";
import styled from "styled-components";
import { css } from "styled-components";

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
 * @param {string} state 타입
 * @returns 테스트
 */
const Chip = ({ state, icon, image, text, isCloseAble, handleCloseButton }) => {
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
          src="/asset/images/Icon/content/Status=cancel, Type=fill.svg"
          alt="닫기버튼"
          onClick={handleCloseButton}
          onKeyUp={handleCloseButton}
        />
      )}
    </ChipWrapper>
  );
};

Chip.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Default", "Input", "Filter"]),
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon: PropTypes.string,
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image: PropTypes.string,
  /** 텍스트 */
  text: PropTypes.string,
  /** 제거 버튼 활성화 여부. Input 타입은 상시, Filter 타입은 선택형*/
  isCloseAble: PropTypes.bool,
  /** 제거 버튼 클릭 시 이벤트 */
  handleCloseButton: PropTypes.func,
};

Chip.defaultProps = {
  state: "Default",
  text: "Chip",
  icon: "/asset/images/Icon/content/Status=cancel, Type=fill.svg",
  image: "/asset/images/Icon/content/Status=cancel, Type=fill.svg",
  isCloseAble: false,
  handleCloseButton: () => console.log("handleCloseButton"),
};

export default Chip;
