import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import { ReactComponent as FilterIcon } from "Icon/content/filter/fill.svg";
import styled, { css } from "styled-components";
import { Icontest } from "./icontest";
import { ReactComponent as arrowDownIcon } from "Icon/arrow/arrow/down/Small.svg";
import Controller from "../Controller/Controller";

type DropdownPropsType = {
  state: "Default" | "Icon" | "Label" | "Checkbox";
  placeHolder: string;
  dropdownChildren:
    | Array<DefaultPropsType>
    | Array<IconPropsType>
    | Array<LabelPropsType>
    | Array<CheckboxPropsType>;
};
type DefaultPropsType = {
  text: string;
  children?: Array<DefaultPropsType>;
};
type IconPropsType = {
  text: string;
  prefix?: boolean;
  affix?: boolean;
  icon: React.ReactNode;
  children?: Array<IconPropsType>;
};
type LabelPropsType = {
  text: string;
  prefix?: boolean;
  affix?: boolean;
  label: React.ReactNode;
  children?: Array<LabelPropsType>;
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
const MenuBoxWrapper = styled.div`
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
  width: inherit;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.8rem 0 2rem;
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
/** 드롭박스  */
const Dropdown = ({
  state,
  placeHolder,
  dropdownChildren,
}: DropdownPropsType) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [textValue, setTextValue] = useState(placeHolder);
  const disabled = false;
  const tmp = 1;
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
          {state === "Default" && (
            <>
              <TextWrapper>{textValue}</TextWrapper>
            </>
          )}

          {state === "Label" && (
            <>
              <ContentWrapper>
                <ArrowDownIcon />
                <LabelContent>Label</LabelContent>
              </ContentWrapper>
              <TextWrapper>{textValue}</TextWrapper>
            </>
          )}
          {state === "Checkbox" && (
            <Controller state="Checkbox" text="텍스트" disabled={disabled} />
          )}
        </TextContentWrapper>
        <ArrowDownIcon />
      </TextBoxWrapper>

      {active && (
        <MenuBoxWrapper>
          {
            {
              Default: dropdownChildren.map(({ text }) => (
                <MenuBoxItemWrapper onClick={onClickDropDownMenu} key={text}>
                  {text}
                </MenuBoxItemWrapper>
              )),
              Icon: <></>,
              Label: <></>,
              Checkbox: <></>,
            }[state]
          }
        </MenuBoxWrapper>
      )}
    </Wrapper>
  );
};

Dropdown.defaultProps = {
  state: "Default",
  placeHolder: "placeholder",
  dropdownChildren: [{ text: "hello" }, { text: "2hello" }, { text: "3hello" }],
};

export { Dropdown };
