import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const ChipWrapper = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  ${({ theme, propType, icon, image, isCloseAble }) => {
    if (propType === "Filter") {
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
    } else if (propType === "Input") {
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

export const Chip = ({
  propType,
  text,
  icon,
  image,
  isCloseAble,
  handleCloseButton,
}) => {
  return (
    <ChipWrapper
      propType={propType}
      icon={icon}
      image={image}
      isCloseAble={isCloseAble}
    >
      {icon && <img src={icon} alt="아이콘" />}
      {image && <img src={image} alt="이미지" />}
      {text}
      {isCloseAble && (
        <img
          src="/"
          alt="닫기버튼"
          onClick={handleCloseButton}
          onKeyUp={handleCloseButton}
        />
      )}
    </ChipWrapper>
  );
};
