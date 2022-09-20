import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 14.9rem;
  height: 3.4rem;
  padding: 0.6rem 1.2rem;
  ${({ theme }) => theme.font.body2_400}
  border: 1px solid ${({ theme }) => theme.color.gray._900};
  border-radius: 8px;
  position: relative;
`;
const ClockIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0.8rem;
  top: 0.6rem;
`;
const TimeDropdownWrapper = styled.div`
  position: absolute;
  top: 4.2rem;
  left: 0;
  width: 23.7rem;
  height: 19.8rem;
  padding: 0 2rem 2rem 2rem;
  box-shadow: 0px 0px 16px 2px rgba(37, 50, 113, 0.12);
  border-radius: 1.6rem;
`;
const TimeDropdownContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const TimeDropdownLi = styled.li`
  display: flex;
  flex-direction: column;
`;

const TimeDropdownUl = styled.ul`
  padding: 1.2rem 1.1rem;
  ${({ theme }) => theme.font.body2_400}
`;
const TimePicker = () => {
  return (
    <Wrapper>
      08:23 PM <ClockIcon src="/asset/images/Icon/dummy_icon.svg" alt="dummy" />
      <TimeDropdownWrapper>
        <TimeDropdownContentWrapper>
          <TimeDropdownLi>
            <TimeDropdownUl>오전</TimeDropdownUl>
            <TimeDropdownUl>오후</TimeDropdownUl>
          </TimeDropdownLi>
          <TimeDropdownLi>
            <TimeDropdownUl>07 시</TimeDropdownUl>
            <TimeDropdownUl>08 시</TimeDropdownUl>
            <TimeDropdownUl>09 시</TimeDropdownUl>
          </TimeDropdownLi>
          <TimeDropdownLi>
            <TimeDropdownUl>22 분</TimeDropdownUl>
            <TimeDropdownUl>23 분</TimeDropdownUl>
            <TimeDropdownUl>24 분</TimeDropdownUl>
          </TimeDropdownLi>
        </TimeDropdownContentWrapper>
      </TimeDropdownWrapper>
    </Wrapper>
  );
};

export default TimePicker;
