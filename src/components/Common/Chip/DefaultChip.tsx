import styled, { css } from "styled-components";

export type DefaultChipPropsType = {
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon?: React.ReactNode;
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image?: React.ReactNode;
  /** 텍스트 */
  text: string;
};

const DefaultChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  height: 2.8rem;
  ${({ theme, image, icon }) => css`
    ${theme.font.body3_400};
    background-color: ${theme.color.white._100};
    border: 1px solid ${theme.color.gray._300};
    color: ${theme.color.gray._900};
    padding-right: 1.2rem;
    padding-left: ${(image && ".4rem") || (icon && ".8rem") || "1.2rem"};
    :hover {
      background-color: ${theme.color.gray._50};
    }
    :target,
    :focus {
      background-color: ${theme.color.gray._100};
    }
  `}
`;
/**
 * Default는 image,Icon 사용가능
 * Input은과 Filter는 image,Icon, 사용가능 및 색이 어두움
 */
const DefaultChip = ({ icon, image, text }: DefaultChipPropsType) => {
  return (
    <DefaultChipWrapper icon={icon} image={image}>
      {icon || image || true}
      {text}
    </DefaultChipWrapper>
  );
};

DefaultChip.defaultProps = {
  text: "Chip",
  icon: false,
  image: false,
};

export default DefaultChip;
