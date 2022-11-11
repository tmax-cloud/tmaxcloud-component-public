import React from "react";
import styled, { css } from "styled-components";
type ProgressBarPropsType = {
  title: string;
  description: string;
  nowPercent: number;
  size: "Small" | "Medium" | "Large";
};

const ProgressBarWrapper = styled.div`
  width: 100%;
`;
const ProgressBarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const TitleIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.4rem;
  margin-bottom: 0.3rem;
`;
const Title = styled.div`
  ${({ theme }) => theme.font.body4_400};
  line-height: 18px;
`;
const CheckIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const ProgressLineWrapper = styled.div`
  width: 100%;
  height: ${({ size }) => {
    if (size === "Small") {
      return 0.4;
    } else if (size === "Medium") {
      return 0.8;
    } else if (size === "Large") return 1.6;
  }}rem;
  margin: 0.6rem 0;
  background-color: ${({ theme }) => theme.color.gray._200};
  position: relative;
`;
const ProgressLine = styled.div`
  width: ${({ nowPercent }) => nowPercent}%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.marine._500};
  position: absolute;
  left: 0%;
  top: 0%;
`;
const Description = styled.div`
  ${({ theme }) => theme.font.detail1_400};
  line-height: 17px;
  color: ${({ theme }) => theme.color.gray._400};
`;
const ProgressBar = ({
  title,
  description,
  nowPercent,
  size,
}: ProgressBarPropsType) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarHeader>
        <TitleWrapper>
          <TitleIcon
            src="asset/images/Icon/content/file/line/Default.svg"
            alt="타이틀 아이콘"
          />
          <Title>{title}</Title>
        </TitleWrapper>
        <CheckIcon
          src="asset/images/Icon/content/circle_button/success/fill.svg"
          alt="타이틀 아이콘"
        />
      </ProgressBarHeader>
      <ProgressLineWrapper size={size}>
        <ProgressLine nowPercent={nowPercent} />
      </ProgressLineWrapper>
      <Description>{description}</Description>
    </ProgressBarWrapper>
  );
};
ProgressBar.defaultProps = {
  title: "test",
  description: "text",
  nowPercent: 20,
  size: "Small",
};

export { ProgressBar };
