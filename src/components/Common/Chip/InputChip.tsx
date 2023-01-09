import styled, { css } from "styled-components";
import { ReactComponent as cancelIcon } from "Icon/content/circle_button/cancel/fill.svg";

export type InputChipPropsType = {
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon?: React.ReactNode;
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image?: React.ReactNode;
  /** 텍스트 */
  text: string;
  /** 제거 버튼 클릭 시 이벤트 */
  onClick: () => void;
};

const InputChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 2.8rem;
  border-radius: 8px;
  gap: 8px;
  ${({ theme, image, icon }) => css`
    background-color: ${theme.color.white._100};
    border: 1px solid ${theme.color.gray._300};
    color: ${theme.color.gray._900};
    padding-right: 0.8rem;
    padding-left: ${(image && ".4rem") || (icon && ".8rem") || "1.2rem"};
    ${theme.font.body3_400}
    :hover {
      background-color: ${theme.color.gray._50};
    }
    :target,
    :focus {
      background-color: ${theme.color.gray._100};
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
const InputChip = ({ icon, image, text, onClick }: InputChipPropsType) => {
  return (
    <InputChipWrapper icon={icon} image={image}>
      {icon || image || true}
      {text}
      <CancelIcon onClick={onClick} />
    </InputChipWrapper>
  );
};

InputChip.defaultProps = {
  text: "Chip",
  icon: false,
  image: false,
  onClick: () => console.log("onClick"),
};

export default InputChip;
