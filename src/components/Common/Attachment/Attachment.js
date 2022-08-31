import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: ${({ state }) => (state === "Medium" ? "center" : "flex-start")};
  justify-content: center;
  gap: 0.8rem;
  background: ${({ theme }) => theme.color.white._100};
  border: 0.1rem solid ${({ theme }) => theme.color.gray._300};
  border-radius: 0.8rem;
  padding: 1.25rem 1.2rem;
`;

const IconWrapper = styled.div``;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const DataWrapper = styled.div`
  display: flex;

  ${({ state }) => {
    if (state === "Medium")
      return css`
        flex-direction: row;
        gap: 0.8rem;
        align-items: center;
      `;
    else
      return css`
        flex-direction: column;
        gap: 0.3rem;
        align-items: flex-start;
      `;
  }}
`;
const Name = styled.div`
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.gray._900};
`;

const Size = styled.div`
  ${({ theme }) => theme.font.body3_400};
  color: ${({ theme }) => theme.color.gray._500};
`;

const Attacthment = ({ state, name, size }) => {
  return (
    <Wrapper state={state}>
      <IconWrapper>
        <Icon src="/" alt="file" />
      </IconWrapper>
      <DataWrapper state={state}>
        <Name>{name}</Name>
        <Size>{size}</Size>
      </DataWrapper>
    </Wrapper>
  );
};

Attacthment.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Medium", "Large"]),
  /** 파일 이름 */
  name: PropTypes.string,
  /** 파일 크기 */
  size: PropTypes.string,
};

Attacthment.defaultProps = {
  state: "Medium",
  name: "이름",
  size: "사이즈",
};

export default Attacthment;
