import styled, { css } from "styled-components";

type BadgePropsType = {
  /** 타입 */
  state: "Default" | "Icon" | "Dot";
  /** 배경색상 */
  backgroundColor: string;
  /** 텍스트 */
  text: string;
};

const Wrapper = styled.div`
  min-width: 1.6rem;
  height: 1.6rem;
  border-radius: 10rem;
  padding: 0 0.5rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.color.white._100};
  ${({ theme }) => theme.font.detail2_400};
  img {
    width: 1rem;
    height: 1rem;
  }
`;

const DotWrapper = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 1rem;
`;

const Badge = ({ state, backgroundColor, text }: BadgePropsType) => {
  return state !== "Dot" ? (
    <Wrapper state={state} backgroundColor={backgroundColor}>
      {state === "Icon" && (
        <img src="/asset/images/Icon/dummy_icon.svg" alt="notice" />
      )}
      <span>{text}</span>
    </Wrapper>
  ) : (
    <DotWrapper backgroundColor={backgroundColor} />
  );
};

Badge.defaultProps = {
  state: "Default",
  backgroundColor: "#ffffff",
  text: "test",
};

export default Badge;
