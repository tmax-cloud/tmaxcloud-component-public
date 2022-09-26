import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.color.white._100};
  ${({ theme, size }) => {
    if (size === "Xlarge")
      return css`
        height: 2rem;
        font-size: 1rem;
        border-radius: 10rem;
        padding: 2rem;
        img {
          width: 1rem;
          height: 1rem;
        }
      `;
    else if (size === "Large")
      return css`
        padding: 2rem;
      `;
    else if (size === "Medium")
      return css`
        padding: 2rem;
      `;
    else
      return css`
        height: 1.6rem;
        padding: 1.2rem;
        img {
          width: 1rem;
          height: 1rem;
        }
      `;
  }}
`;

const Badge = ({ state, size, backgroundColor, text }) => {
  return (
    <Wrapper state={state} backgroundColor={backgroundColor} size={size}>
      {state === "Icon" && (
        <img src="/asset/images/Icon/dummy_icon.svg" alt="notice" />
      )}
      <span>{text}</span>
    </Wrapper>
  );
};

Badge.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Default", "Icon", "Dot"]),
  /** 높이 기준의 사이즈. 이를 기준으로 폰트 크기, 아이콘 크기, radius, padding이 상이 */
  size: PropTypes.oneOf(["Xlarge", "Large", "Medium", "Small"]),
  /** 배경색상 */
  backgroundColor: PropTypes.string,
  /** 텍스트 */
  text: PropTypes.string,
};

Badge.defaultProps = {
  state: "Default",
  size: "Xlarge",
  backgroundColor: "#ffffff",
  text: "test",
};

export default Badge;
