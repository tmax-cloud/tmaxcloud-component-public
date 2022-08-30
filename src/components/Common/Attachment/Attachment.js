import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Name = styled.span`
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.gray._900};
`;

const Size = styled.span`
  ${({ theme }) => theme.font.body3_400};
  color: ${({ theme }) => theme.color.gray._500};
`;

const Attacthment = ({ state, name, size }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src="/" />
      </IconWrapper>
      <DataWrapper>
        <Name>{name}</Name>
        <Size>{size}</Size>
      </DataWrapper>
    </Wrapper>
  );
};

Attacthment.propTypes = {
  /** Attachment 규격 */
  state: PropTypes.oneOf(["Medium", "Large"]),
  name: PropTypes.string,
  size: PropTypes.string,
};

Attacthment.defaultProps = {
  state: "Medium",
  name: "이름",
  size: "사이즈",
};

export default Attacthment;
