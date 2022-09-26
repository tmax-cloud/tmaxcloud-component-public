import React, { useState } from "react";
import styled, { css } from "styled-components";

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
  padding: 0.8rem 1rem;

  gap: 1.6rem;
`;
const TimeDropdownUl = styled.ul`
  width: 4.8rem;
  height: 13.4rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const TimeDropdownLi = styled.li`
  padding: 1.2rem 0rem;
  text-align: center;
  ${({ theme }) => theme.font.body2_400}
  margin: 0;
  :hover,
  :focus,
  :focus-visible,
  :target {
    cursor: pointer;
    ${({ theme }) => theme.font.body2_700}
  }
  ${({ active }) =>
    active &&
    css`
      ${({ theme }) => theme.font.body2_700}
    `}
`;
const Hour: string[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const Minute: string[] = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];

const TimePicker = () => {
  const [time, setTime] = useState("08:23 PM");
  const [hourIndexState, setHourIndexState] = useState(0);
  const [minuteIndexState, setMinuteIndexState] = useState(0);

  const handleHourIndexState = (HourIndex: number) => {
    setHourIndexState(HourIndex);
  };
  const handleMinuteIndexState = (MinuteIndex: number) => {
    setMinuteIndexState(MinuteIndex);
  };

  return (
    <Wrapper>
      {time}
      <ClockIcon src="/asset/images/Icon/dummy_icon.svg" alt="dummy" />
      <TimeDropdownWrapper>
        <TimeDropdownContentWrapper>
          <TimeDropdownUl>
            <TimeDropdownLi>오전</TimeDropdownLi>
            <TimeDropdownLi>오후</TimeDropdownLi>
          </TimeDropdownUl>
          <TimeDropdownUl>
            {Hour.map((hour, hourIndex) => (
              <TimeDropdownLi
                key={`${hour} 시`}
                onClick={() => {
                  handleHourIndexState(hourIndex);
                }}
                active={hourIndex === hourIndexState}
              >
                {hour} 시
              </TimeDropdownLi>
            ))}
          </TimeDropdownUl>
          <TimeDropdownUl>
            {Minute.map((minute, minuteIndex) => (
              <TimeDropdownLi
                key={`${minute} 분`}
                onClick={() => {
                  handleMinuteIndexState(minuteIndex);
                }}
                active={minuteIndex === minuteIndexState}
              >
                {minute} 분
              </TimeDropdownLi>
            ))}
          </TimeDropdownUl>
        </TimeDropdownContentWrapper>
      </TimeDropdownWrapper>
    </Wrapper>
  );
};

export default TimePicker;
