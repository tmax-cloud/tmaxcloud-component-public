import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as arrowDownIcon } from "Icon/arrow/arrow/down/Small.svg";
import { ReactComponent as arrowRightIcon } from "Icon/arrow/arrow/right/Small.svg";
import Controller from "../Controller/Controller";

type DropdownPropsType = {
  state: "Default" | "Content" | "Checkbox";
  placeHolderText: string | number;
  placeHolderOption?: placeHolderOptionPropsType;
  /** dropdown 선택 함수*/
  onClickDropdown: (e) => void;
  dropdownChildren:
    | Array<DefaultPropsType>
    | Array<optionPropsType>
    | Array<CheckboxPropsType>;
};
type placeHolderOptionPropsType = {
  /** 앞,뒤 붙이는 위치 */
  location: "prefix" | "affix";
  /** type="Label"의 경우 라벨, type="Icon"의 경우 아이콘 */
  option?: React.ReactNode;
};
type DefaultPropsType = {
  text: string;
  childrenProp?: Array<DefaultPropsType>;
};
type optionPropsType = {
  text: string;
  location: "prefix" | "affix";
  option: React.ReactNode;
  childrenProp?: Array<optionPropsType>;
};

type CheckboxPropsType = {
  text: string;
  childrenProp?: Array<CheckboxPropsType>;
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 21rem;
  height: 3.2rem;
`;
const RelativeWrapper = styled.div`
  position: relative;
`;
const TextBoxWrapper = styled.button`
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.8rem 0.55rem 1.2rem;
  background-color: ${({ theme }) => theme.color.white._100};
  border: 1px solid ${({ theme }) => theme.color.gray._300};
  border-radius: 8px;
  :hover {
    border-color: ${({ theme }) => theme.color.gray._500};
  }
  :active,
  :focus-visible {
    border-color: ${({ theme }) => theme.color.gray._900};
  }
  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.color.gray._900};
      :hover {
        border-color: inherit;
      }
    `}

  :disabled {
    border: none;
    color: ${({ theme }) => theme.color.gray._400};
    background-color: ${({ theme }) => theme.color.gray._200};
    border-radius: 0.8rem;
  }
`;
const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const LabelContent = styled.div`
  height: 1.6rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10rem;
  ${({ theme }) => theme.font.detail2_400};
  background-color: ${({ theme }) => theme.color.marine._500};
  color: ${({ theme }) => theme.color.white._100};
  line-height: 1.1rem;
`;
const TextWrapper = styled.span`
  ${({ theme }) => theme.font.body2_400};
`;
const ArrowDownIcon = styled(arrowDownIcon)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.gray._700};
`;
const ArrowRightIcon = styled(arrowRightIcon)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.gray._700};
`;
const Dropdown1DepsChildrenWrapper = styled.div`
  width: inherit;
  position: absolute;
  top: 4rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  ${({ theme }) => theme.font.body3_400};
  ${({ active }) =>
    active &&
    css`
      visibility: visible;
    `}
`;
const MenuBoxItemWrapper = styled.button`
  width: 100%;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.8rem 0 2rem;
  justify-content: space-between;
  :hover,
  :active,
  :focus-visible {
    background-color: ${({ theme }) => theme.color.gray._100};
  }
  :disabled {
    background-color: ${({ theme }) => theme.color.white._100};
    opacity: 0.2;
  }
`;
const Dropdown2DepsChildrenWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.font.body3_400};
  top: 0;
  left: 100%;
`;
const DropdownCheckbox2DepsChildrenWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.white._100};
  padding: 0.8rem 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.font.body3_400};
  top: 0;
  left: 100%;
  visibility: hidden;
  ${({ view }) =>
    view &&
    css`
      visibility: visible;
    `}
`;
const OptionWrapper = styled.div`
  display: inline-flex;
  gap: 0.8rem;
  flex-direction: row;
  align-items: center;
  pointer-events: none;
`;
const ControlIcon = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;

  background: ${({ theme }) => theme.color.white._100};

  border: 1px solid ${({ theme }) => theme.color.blueGray._300};
  border-radius: 0.6rem;
`;

/** Control 요소 사용 불가 */
const SBDropdown = ({
  state,
  placeHolderText,
  onClickDropdown,
  placeHolderOption,
  dropdownChildren,
}: DropdownPropsType) => {
  const [placeHolderOptionState, setPlaceHolderOptionState] =
    useState(placeHolderOption);
  const [placeHolderTextState, setPlaceHolderTextState] =
    useState(placeHolderText);

  const onClickDropdownSB = (e) => {
    if (state === "Default") {
      setPlaceHolderTextState(e);
    } else if (state === "Content") {
      setPlaceHolderOptionState(e);
      setPlaceHolderTextState(e.text);
    } else {
      if (typeof placeHolderTextState === "number") {
        e.target.checked
          ? setPlaceHolderTextState(placeHolderTextState + 1)
          : setPlaceHolderTextState(placeHolderTextState - 1);
      }
    }
  };
  console.log(ArrowDownIcon);
  return (
    <>
      <Dropdown
        state={state}
        placeHolderText={placeHolderTextState}
        onClickDropdown={onClickDropdownSB}
        dropdownChildren={dropdownChildren}
        placeHolderOption={placeHolderOptionState}
      />
    </>
  );
};

/** 드롭박스  */
const Dropdown = ({
  state,
  placeHolderText,
  placeHolderOption,
  onClickDropdown,
  dropdownChildren,
}: DropdownPropsType) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const disabled = false;

  const onClick = () => {
    setActive(!active);
  };
  /** Default 드롭다운내부의 click 이벤트 함수 */
  const onClickDefaultDropdown = (e: React.ChangeEvent<HTMLButtonElement>) => {
    onClickDropdown(e.target.innerText);
    setActive(false);
  };
  /** Label,Icon 드롭다운내부의 click 이벤트 함수 */
  const onClickOptionDropdown = (text, location, option) => {
    onClickDropdown({ text, location, option });
    setActive(false);
  };
  const onClickCheckboxDropdown = (e) => {
    onClickDropdown(e);
  };

  const CloseMenu = (e) => {
    if (active && !ref.current.contains(e.target)) setActive(false);
  };
  const keydownEvent = (e) => {
    if (active && e.key === "Escape") {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", CloseMenu);
    document.addEventListener("keydown", keydownEvent);
    return () => {
      document.removeEventListener("mousedown", CloseMenu);
      document.removeEventListener("keydown", keydownEvent);
    };
  });
  return (
    <Wrapper ref={ref}>
      <TextBoxWrapper onClick={onClick} active={active} disabled={disabled}>
        <TextContentWrapper>
          {
            {
              Default: (
                <>
                  <TextWrapper>{placeHolderText}</TextWrapper>
                </>
              ),

              Content:
                placeHolderOption?.location === "prefix" ? (
                  <>
                    <ContentWrapper>{placeHolderOption?.option}</ContentWrapper>
                    <TextWrapper>{placeHolderText}</TextWrapper>
                  </>
                ) : (
                  <>
                    <TextWrapper>{placeHolderText}</TextWrapper>
                    <ContentWrapper>{placeHolderOption?.option}</ContentWrapper>
                  </>
                ),
              Checkbox: (
                <>
                  <ControlIcon />
                  <TextWrapper>{placeHolderText} Selected</TextWrapper>
                </>
              ),
            }[state]
          }
        </TextContentWrapper>
        <ArrowDownIcon />
      </TextBoxWrapper>

      {
        {
          Default: (
            <Dropdown1DepsChildrenWrapper active={active}>
              {dropdownChildren.map(
                ({ text, childrenProp }: DefaultPropsType) => (
                  <Dropdown1DepsChildren
                    text={text}
                    childrenProp={childrenProp}
                    onClickDefaultDropdown={onClickDefaultDropdown}
                    key={text}
                  />
                ),
              )}
            </Dropdown1DepsChildrenWrapper>
          ),
          Content: (
            <Dropdown1DepsChildrenWrapper active={active}>
              {dropdownChildren.map((props: optionPropsType) => (
                <DropdownOption1DepsChildren
                  {...props}
                  onClickOptionDropdown={onClickOptionDropdown}
                  key={props.text}
                />
              ))}
            </Dropdown1DepsChildrenWrapper>
          ),

          Checkbox: (
            <Dropdown1DepsChildrenWrapper active={active}>
              {dropdownChildren.map(
                ({ text, childrenProp }: CheckboxPropsType) => (
                  <DropdownCheckbox1DepsChildren
                    text={text}
                    childrenProp={childrenProp}
                    onClickCheckboxDropdown={onClickCheckboxDropdown}
                    key={text}
                  />
                ),
              )}
            </Dropdown1DepsChildrenWrapper>
          ),
        }[state]
      }
    </Wrapper>
  );
};
const Dropdown1DepsChildren = ({
  text,
  childrenProp,
  onClickDefaultDropdown,
}) => {
  const [view, setView] = useState(false);
  return (
    <RelativeWrapper
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            {text}
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && view && (
            <Dropdown2DepsChildrenWrapper>
              {childrenProp?.map((props) => (
                <Dropdown2DepsChildren
                  {...props}
                  onClickDefaultDropdown={onClickDefaultDropdown}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper onClick={onClickDefaultDropdown}>
          {text}
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};
/** Dropdown 2deps */
const Dropdown2DepsChildren = ({
  text,
  childrenProp,
  onClickDefaultDropdown,
}: any) => {
  const [view, setView] = useState(false);
  return (
    <RelativeWrapper
      key={text}
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            {text}
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && view && (
            <Dropdown2DepsChildrenWrapper>
              {childrenProp?.map((props) => (
                <Dropdown2DepsChildren
                  {...props}
                  onClickDefaultDropdown={onClickDefaultDropdown}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper onClick={onClickDefaultDropdown}>
          {text}
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};

const DropdownOption1DepsChildren = ({
  text,
  location,
  option,
  childrenProp,
  onClickOptionDropdown,
}: any) => {
  const [view, setView] = useState(false);
  return (
    <RelativeWrapper
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            <OptionWrapper>
              {location === "prefix" ? (
                <>
                  {option}
                  <span>{text}</span>
                </>
              ) : (
                <>
                  <span>{text}</span>
                  {option}
                </>
              )}
            </OptionWrapper>
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && view && (
            <Dropdown2DepsChildrenWrapper>
              {childrenProp?.map((props) => (
                <DropdownOption2DepsChildren
                  {...props}
                  onClickOptionDropdown={onClickOptionDropdown}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper
          onClick={() => onClickOptionDropdown(text, location, option)}
        >
          <OptionWrapper>
            {location === "prefix" ? (
              <>
                {option}
                <span>{text}</span>
              </>
            ) : (
              <>
                <span>{text}</span>
                {option}
              </>
            )}
          </OptionWrapper>
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};
const DropdownOption2DepsChildren = ({
  text,
  location,
  option,
  childrenProp,
  onClickOptionDropdown,
}: any) => {
  const [view, setView] = useState(false);

  return (
    <RelativeWrapper
      key={text}
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            <OptionWrapper>
              {location === "prefix" ? (
                <>
                  {option}
                  <span>{text}</span>
                </>
              ) : (
                <>
                  <span>{text}</span>
                  {option}
                </>
              )}
            </OptionWrapper>
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && view && (
            <Dropdown2DepsChildrenWrapper>
              {childrenProp?.map((props) => (
                <DropdownOption2DepsChildren
                  {...props}
                  onClickOptionDropdown={onClickOptionDropdown}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper
          onClick={() => onClickOptionDropdown(text, location, option)}
        >
          <OptionWrapper>
            {location === "prefix" ? (
              <>
                {option}
                <span>{text}</span>
              </>
            ) : (
              <>
                <span>{text}</span>
                {option}
              </>
            )}
          </OptionWrapper>
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};
/** Checkbox의 상태유지를 위해 css로 숨기는 방법 선택 */
const DropdownCheckbox1DepsChildren = ({
  text,
  childrenProp,
  onClickCheckboxDropdown,
}) => {
  const [view, setView] = useState(false);
  return (
    <RelativeWrapper
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            {text}
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && (
            <DropdownCheckbox2DepsChildrenWrapper view={view}>
              {childrenProp?.map((props) => (
                <DropdownCheckbox2DepsChildren
                  {...props}
                  onClickCheckboxDropdown={onClickCheckboxDropdown}
                  key={props.text}
                />
              ))}
            </DropdownCheckbox2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper>
          <Controller
            state="Checkbox"
            props={{
              text,
              onChange: onClickCheckboxDropdown,
              disabled: false,
            }}
          />
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};
const DropdownCheckbox2DepsChildren = ({
  text,
  childrenProp,
  onClickCheckboxDropdown,
}: any) => {
  const [view, setView] = useState(false);
  return (
    <RelativeWrapper
      key={text}
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
    >
      {childrenProp ? (
        <>
          <MenuBoxItemWrapper>
            {text}
            {childrenProp && <ArrowRightIcon />}
          </MenuBoxItemWrapper>
          {childrenProp && (
            <DropdownCheckbox2DepsChildrenWrapper view={view}>
              {childrenProp?.map((props) => (
                <DropdownCheckbox2DepsChildren
                  {...props}
                  onClickCheckboxDropdown={onClickCheckboxDropdown}
                  key={props.text}
                />
              ))}
            </DropdownCheckbox2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper>
          <Controller
            state="Checkbox"
            props={{
              text,
              onChange: onClickCheckboxDropdown,
            }}
          />
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};
// SBDropdown.defaultProps = {
//   state: "Default",
//   placeHolderText: "placeholder",
//   dropdownChildren: [
//     { text: "hello" },
//     { text: "2hello" },
//     {
//       text: "3hello",
//       childrenProp: [
//         { text: "4hello" },
//         { text: "5hello" },
//         {
//           text: "6hello",
//           childrenProp: [
//             {
//               text: "7hello",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
// SBDropdown.defaultProps = {
//   state: "Label",
//   placeHolderText: "labelTest",
//   placeHolderOption: {
//     location: "prefix",
//     option: <LabelContent>llllll</LabelContent>,
//   },
//   dropdownChildren: [
//     {
//       text: "hello",
//       location: "prefix",
//       option: <LabelContent>hello</LabelContent>,
//     },
//     {
//       text: "2hello",
//       location: "prefix",
//       option: <LabelContent>2hello</LabelContent>,
//     },
//     {
//       text: "3hello",
//       location: "affix",
//       option: <LabelContent>3hello</LabelContent>,
//       childrenProp: [
//         {
//           text: "4hello",
//           location: "prefix",
//           option: <LabelContent>4hello</LabelContent>,
//         },
//         {
//           text: "5hello",
//           location: "prefix",
//           option: <LabelContent>5hello</LabelContent>,
//         },
//         {
//           text: "6hello",
//           location: "prefix",
//           option: <LabelContent>6hello</LabelContent>,
//           childrenProp: [
//             {
//               text: "7hello",
//               location: "affix",
//               option: <LabelContent>7hello</LabelContent>,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export { Dropdown, SBDropdown };
