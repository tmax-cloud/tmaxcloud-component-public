import styled from "styled-components";

type ThrobberPropsType = {
  isActive: boolean;
};

const SpinnerWrapper = styled.div``;
const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.color.gray._200};
  border-top-color: ${({ theme }) => theme.color.marine._500};
  animation: spinner 1s linear infinite;
`;

const Throbber = ({ isActive }: ThrobberPropsType) => {
  return isActive ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <></>
  );
};

Throbber.defaultProps = {
  isActive: false,
};

export default Throbber;
