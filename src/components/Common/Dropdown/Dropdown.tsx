import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import { ReactComponent as FilterIcon } from "Icon/content/filter/fill.svg";
import styled, { css } from "styled-components";
import { Icontest } from "./icontest";
import { ReactComponent as arrowDownIcon } from "Icon/arrow/arrow/down/Small.svg";
import { ReactComponent as arrowRightIcon } from "Icon/arrow/arrow/right/Small.svg";
import Controller from "../Controller/Controller";
/** default 제외 타이틀의 icon,label을 어떻게 type으로 정해야할지? 그냥 ?로 해야하나? */
type DropdownPropsType = {
  state: "Default" | "Icon" | "Label" | "Checkbox";
  placeHolderText: string;
  placeHolderOption?: placeHolderOptionPropsType;
  dropdownChildren:
    | Array<DefaultPropsType>
    | Array<IconPropsType>
    | Array<LabelPropsType>
    | Array<CheckboxPropsType>;
};
type placeHolderOptionPropsType = {
  /** 앞,뒤 붙이는 위치 */
  location: "prefix" | "affix";
  /** type="Label"의 경우 텍스트 */
  text?: string;
  /** type="Icon"의 경우 아이콘 */
  icon?: React.ReactNode;
};
type DefaultPropsType = {
  text: string;
  childrenProp?: Array<DefaultPropsType>;
};
type IconPropsType = {
  text: string;
  prefix?: boolean;
  affix?: boolean;
  icon: React.ReactNode;
  childrenProp?: Array<IconPropsType>;
};
type LabelPropsType = {
  text: string;
  prefix?: boolean;
  affix?: boolean;
  label: React.ReactNode;
  childrenProp?: Array<LabelPropsType>;
};
type CheckboxPropsType = {
  text: string;
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
`;
const ContentWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const LabelContent = styled.div`
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
  ${({ theme }) => theme.font.body3_400};
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

/** 드롭박스  */
const Dropdown = ({
  state,
  placeHolderText,
  placeHolderOption,
  dropdownChildren,
}: DropdownPropsType) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [textValue, setTextValue] = useState(placeHolderText);
  const disabled = false;
  console.log(dropdownChildren);

  const onClick = () => {
    setActive(!active);
    console.log(active);
  };
  const onClickDropDownMenu = (e: React.ChangeEvent<HTMLButtonElement>) => {
    console.log(e);
    setTextValue(e.target.innerText);
    setActive(false);
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
                  <TextWrapper>{textValue}</TextWrapper>
                </>
              ),

              Label:
                placeHolderOption?.location === "prefix" ? (
                  <>
                    <ContentWrapper>
                      <LabelContent>{placeHolderOption?.text}</LabelContent>
                    </ContentWrapper>
                    <TextWrapper>{textValue}</TextWrapper>
                  </>
                ) : (
                  <>
                    <TextWrapper>{textValue}</TextWrapper>
                    <ContentWrapper>
                      <LabelContent>{placeHolderOption?.text}</LabelContent>
                    </ContentWrapper>
                  </>
                ),
              Checkbox: (
                <Controller
                  state="Checkbox"
                  text="텍스트"
                  disabled={disabled}
                />
              ),
            }[state]
          }
        </TextContentWrapper>
        <ArrowDownIcon />
      </TextBoxWrapper>

      {active && (
        <>
          {
            {
              Default: (
                <Dropdown1DepsChildrenWrapper>
                  {dropdownChildren.map(
                    ({ text, childrenProp }: DefaultPropsType) => (
                      <Dropdown1DepsChildren
                        text={text}
                        childrenProp={childrenProp}
                        onClickDropDownMenu={onClickDropDownMenu}
                        key={text}
                      />
                    ),
                  )}
                </Dropdown1DepsChildrenWrapper>
              ),
              // Default: dropdownChildren.map(
              //   ({ text, children }: DefaultPropsType) => (
              //     <>
              //       <MenuBoxItemWrapper
              //         onClick={onClickDropDownMenu}
              //         key={text}
              //       >
              //         {text}
              //         {children && <ArrowRightIcon />}
              //       </MenuBoxItemWrapper>
              //       {children?.map((props) => (
              //         <Dropdown2DepsChildren
              //           {...props}
              //           onClickDropDownMenu={onClickDropDownMenu}
              //           key={props.text}
              //         />
              //       ))}
              //     </>
              //   ),
              // ),
              Icon: <></>,
              Label: dropdownChildren.map(({ text }) => (
                <MenuBoxItemWrapper onClick={onClickDropDownMenu} key={text}>
                  {placeHolderOption?.location === "prefix" ? (
                    <>
                      <ContentWrapper>
                        <LabelContent>{placeHolderOption?.text}</LabelContent>
                      </ContentWrapper>
                      <TextWrapper>{text}</TextWrapper>
                    </>
                  ) : (
                    <>
                      <TextWrapper>{text}</TextWrapper>
                      <ContentWrapper>
                        <LabelContent>{placeHolderOption?.text}</LabelContent>
                      </ContentWrapper>
                    </>
                  )}
                </MenuBoxItemWrapper>
              )),
              Checkbox: <></>,
            }[state]
          }
        </>
      )}
    </Wrapper>
  );
};
const Dropdown1DepsChildren = ({ text, childrenProp, onClickDropDownMenu }) => {
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
                  onClickDropDownMenu={onClickDropDownMenu}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper onClick={onClickDropDownMenu}>
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
  onClickDropDownMenu,
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
                  onClickDropDownMenu={onClickDropDownMenu}
                  key={props.text}
                />
              ))}
            </Dropdown2DepsChildrenWrapper>
          )}
        </>
      ) : (
        <MenuBoxItemWrapper onClick={onClickDropDownMenu}>
          {text}
        </MenuBoxItemWrapper>
      )}
    </RelativeWrapper>
  );
};

Dropdown.defaultProps = {
  state: "Default",
  placeHolderText: "placeholder",
  dropdownChildren: [
    { text: "hello" },
    { text: "2hello" },
    {
      text: "3hello",
      childrenProp: [
        { text: "4hello" },
        { text: "5hello" },
        {
          text: "6hello",
          childrenProp: [
            {
              text: "7hello",
            },
          ],
        },
      ],
    },
  ],
};
// Dropdown.defaultProps = {
//   state: "Label",
//   placeHolderText: "labelTest",
//   placeHolderOption: {
//     location: "prefix",
//     text: "labelTest",
//   },
//   dropdownChildren: [{ text: "hello" }, { text: "2hello" }, { text: "3hello" }],
// };

export { Dropdown };
