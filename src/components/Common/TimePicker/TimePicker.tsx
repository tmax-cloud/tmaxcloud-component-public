import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../Button/Button";
import { debounce } from "lodash";

const Wrapper = styled.div`
  position: relative;
`;
const ClockWrapper = styled.div`
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
  height: 13.6rem;
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 0.8rem 1rem;
  gap: 1.65rem;
`;
const TimeDropdownUlWrapper = styled.ul`
  scroll-behavior: smooth;
  width: 4.8rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const TimeDropdownLi = styled.li`
  display: list-item;
  flex-basis: auto;
  flex-shrink: 0;
  height: 1.6rem;
  padding: 1.2rem 0rem;
  text-align: center;
  ${({ theme }) => theme.font.body2_700};
  margin: 0;
  opacity: ${({ scrollY }) => scrollY};
`;
const SupportBlock = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 4rem;
`;
const SaveTimeButtonWrapper = styled.div``;
const CenterBorderWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  position: absolute;
  top: 4.8rem;
  left: 0;
  padding: 0 1rem;
  flex: 1 1 0%;
  z-index: -1;
`;
const CenterBorder = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  border-top: 0.1rem solid ${({ theme }) => theme.color.gray._200};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray._200};
  ${({ active, theme }) =>
    active &&
    css`
      border-top: 0.1rem solid ${theme.color.gray._900};
      border-bottom: 0.1rem solid ${theme.color.gray._900};
    `}
`;
const CenterBorderGap = styled.div`
  flex-basis: 1.6rem;
`;
const HourSystemKR: string[] = ["오전", "오후"];
const HourSystemEN: string[] = ["AM", "PM"];
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
const BUTTON_HEIGHT = 40;

/** TimePicker  */
const TimePicker = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [time, setTime] = useState("00:00 AM");
  const [openTimepicker, setOpenTimepicker] = useState(false);
  const [hourSystemIndexState, setHourSystemIndexState] = useState(0);
  const [hourIndexState, setHourIndexState] = useState(0);
  const [minuteIndexState, setMinuteIndexState] = useState(0);
  const [hoverUl, setHoverUl] = useState<string>();

  const toggleTimepicker = () => {
    setOpenTimepicker(!openTimepicker);
  };

  const closeTimepickerEvent = (e) => {
    if (openTimepicker && !ref.current.contains(e.target)) {
      setOpenTimepicker(false);
    }
  };
  const keydownTimepickerEvent = (e) => {
    if (openTimepicker && e.key === "Escape") {
      setOpenTimepicker(false);
    }
  };

  const saveTime = (): void => {
    setTime(
      `${Hour[hourIndexState]}:${Minute[minuteIndexState]} ${HourSystemEN[hourSystemIndexState]}`,
    );
    toggleTimepicker();
  };

  const onKeyPress = (e) => {
    console.log(e);

    if (e.key === "Enter" || e.key === " ") toggleTimepicker();
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeTimepickerEvent);
    document.addEventListener("keydown", keydownTimepickerEvent);

    return () => {
      document.removeEventListener("mousedown", closeTimepickerEvent);
      document.removeEventListener("keydown", keydownTimepickerEvent);
    };
  });

  return (
    <Wrapper>
      <ClockWrapper>
        {time}
        <ClockIcon
          src="/asset/images/Icon/dummy_icon.svg"
          alt="dummy"
          onClick={toggleTimepicker}
          onKeyPress={onKeyPress}
          tabIndex="0"
        />
      </ClockWrapper>
      {openTimepicker && (
        <TimeDropdownWrapper ref={ref}>
          <TimeDropdownContentWrapper>
            <TimeDropdownUl
              setHoverState={() => {
                setHoverUl("HourS");
              }}
              setHoverStateDefault={() => {
                setHoverUl("");
              }}
              propTime={HourSystemKR}
              propState={hourSystemIndexState}
              setState={setHourSystemIndexState}
              unit=""
            />
            <TimeDropdownUl
              setHoverState={() => {
                setHoverUl("Hour");
              }}
              setHoverStateDefault={() => {
                setHoverUl("");
              }}
              propTime={Hour}
              propState={hourIndexState}
              setState={setHourIndexState}
              unit="시"
            />
            <TimeDropdownUl
              setHoverState={() => {
                setHoverUl("Minute");
              }}
              setHoverStateDefault={() => {
                setHoverUl("");
              }}
              propTime={Minute}
              propState={minuteIndexState}
              setState={setMinuteIndexState}
              unit="분"
            />
            <CenterBorderWrapper>
              <CenterBorder active={hoverUl === "HourS"} />
              <CenterBorderGap />
              <CenterBorder active={hoverUl === "Hour"} />
              <CenterBorderGap />
              <CenterBorder active={hoverUl === "Minute"} />
            </CenterBorderWrapper>
          </TimeDropdownContentWrapper>
          <SaveTimeButtonWrapper>
            <Button
              key="확인"
              onClick={saveTime}
              propSize="XL"
              state="PrimaryB"
              text="확인"
            />
          </SaveTimeButtonWrapper>
        </TimeDropdownWrapper>
      )}
    </Wrapper>
  );
};

// type TimeDropdownUlPropType = {
//   propTime: string[];
//   propState: number;
//   setState: (value: React.SetStateAction<number>) => void;
//   unit?: string;
// };

// eslint-disable-next-line react/display-name
/** forwardRef 로 작성한 경우 */
// const TimeDropdownUl = React.forwardRef(
//   (
//     props: TimeDropdownUlPropType,
//     ref: React.MutableRefObject<HTMLUListElement>,
//   ) => {
//     const { propTime, propState, setState, unit } = props;

//     const onClick = (HourIndex: number) => {
//       moveToScroll(ref, HourIndex);
//       setState(HourIndex);
//     };
//     const getCenterPositionFromIndex = (index: number): number => {
//       return BUTTON_HEIGHT * index + 2 * index;
//     };

//     const moveToScroll = (
//       currentRef: React.MutableRefObject<HTMLUListElement>,
//       index: number,
//     ): void => {
//       currentRef.current.scrollTo(0, getCenterPositionFromIndex(index));
//     };

//     useEffect(() => {
//       moveToScroll(ref, propState);
//     }, [propState]);

//     return (
//       <TimeDropdownUlWrapper ref={ref}>
//         <EachColumnWrapper>
//           <SupportBlock />
//           {propTime.map((data, dataIndex) => (
//             <TimeDropdownLi
//               key={`${data}`}
//               onClick={() => {
//                 onClick(dataIndex);
//               }}
//               active={dataIndex === propState}
//             >
//               {data} {unit}
//             </TimeDropdownLi>
//           ))}
//           <SupportBlock />
//         </EachColumnWrapper>
//       </TimeDropdownUlWrapper>
//     );
//   },
// );

const TimeDropdownUl = ({
  setHoverState,
  setHoverStateDefault,
  propTime,
  propState,
  setState,
  unit,
}) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const onClick = (HourIndex: number) => {
    moveToScroll(ref, HourIndex);
    setState(HourIndex);
  };
  const getCenterPositionFromIndex = (index: number): number => {
    return BUTTON_HEIGHT * index;
  };

  const getScrollYIndexState = (scrollNumber) => {
    return Math.floor((scrollNumber + 20) / 40);
  };

  const moveToScroll = (
    currentRef: React.MutableRefObject<HTMLUListElement>,
    index: number,
  ): void => {
    currentRef.current.scrollTo(0, getCenterPositionFromIndex(index));
  };

  const scrollEvent = (e) => {
    setScrollY(e.target.scrollTop);
    setState(getScrollYIndexState(e.target.scrollTop));
  };

  useEffect(() => {
    moveToScroll(ref, propState);
  }, [propState]);

  return (
    <TimeDropdownUlWrapper
      ref={ref}
      tabIndex="0"
      onScroll={debounce(scrollEvent, 25)}
      onMouseOver={setHoverState}
      onMouseOut={setHoverStateDefault}
      onKeyUp={setHoverState}
    >
      <SupportBlock />
      {propTime.map((data, dataIndex) => (
        <TimeDropdownLi
          key={`${data}`}
          onClick={() => {
            onClick(dataIndex);
          }}
          active={dataIndex === propState}
          scrollY={
            Math.abs(scrollY - BUTTON_HEIGHT * dataIndex) >= 20
              ? 0.2
              : 1 -
                Math.abs((scrollY - BUTTON_HEIGHT * dataIndex + 20) / 25 - 0.8)
          }
        >
          {data} {unit}
        </TimeDropdownLi>
      ))}
      <SupportBlock />
    </TimeDropdownUlWrapper>
  );
};

TimePicker.propTypes = {};
TimePicker.defaultProps = {};
export default TimePicker;
