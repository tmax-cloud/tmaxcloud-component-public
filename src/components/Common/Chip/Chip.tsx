import styled, { css } from "styled-components";
type ChipPropsType = {
  /** 타입 */
  state: "Default" | "Input" | "Filter";
  /** 아이콘 링크. image와 중복으로 줄 수 없음 */
  icon?: false | string;
  /** 이미지 링크. icon과 중복으로 줄 수 없음 */
  image?: false | string;
  /** 텍스트 */
  text: string;
  /** 제거 버튼 활성화 여부. Input 타입은 상시, Filter 타입은 선택형*/
  isCloseAble?: boolean;
  /** 제거 버튼 클릭 시 이벤트 */
  handleCloseButton: () => void;
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
const InputChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 2.8rem;
  border-radius: 8px;
  gap: 8px;
  ${({ theme, image, isCloseAble, icon }) => css`
    background-color: ${theme.color.white._100};
    border: 1px solid ${theme.color.gray._300};
    color: ${theme.color.gray._900};
    ${theme.font.body3_400}

    padding-right: ${isCloseAble ? ".8rem" : "1.2rem"};
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
const Icon = styled.img`
  width: 1.45rem;
  height: 1.45rem;
`;
const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;
const CloseIcon = styled.img``;
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
  console.log(state, icon, image, text);

  if (state === "Default") {
    return (
      <DefaultChipWrapper icon={icon} image={image}>
        {icon && <Icon src={icon} alt="아이콘" />}
        {image && <Image src={image} alt="이미지" />}
        {text}
      </DefaultChipWrapper>
    );
  } else if (state === "Input")
    return (
      <InputChipWrapper icon={icon} image={image} isCloseAble={isCloseAble}>
        {icon && <Icon src={icon} alt="아이콘" />}
        {image && <Image src={image} alt="이미지" />}
        {text}

        <CloseIcon
          src="/asset/images/Icon/clear-16px.svg"
          alt="닫기버튼"
          onClick={handleCloseButton}
          onKeyUp={handleCloseButton}
        />
      </InputChipWrapper>
    );
  else
    return (
      <FilterChipWrapper icon={icon} image={image} isCloseAble={isCloseAble}>
        {icon && <Icon src={icon} alt="아이콘" />}
        {image && <Image src={image} alt="이미지" />}
        {text}
        {isCloseAble && (
          <CloseIcon
            src="/asset/images/Icon/clear-16px.svg"
            alt="닫기버튼"
            onClick={handleCloseButton}
            onKeyUp={handleCloseButton}
          />
        )}
      </FilterChipWrapper>
    );
};

Chip.defaultProps = {
  state: "Default",
  text: "Chip",
  handleCloseButton: () => console.log("handleCloseButton"),
};

export default Chip;
