import React from "react";
import styled from "styled-components";
const JumpToSectionWrapper = styled.div`
  width: 22.3rem;
`;
const JumpToSectionStyle = styled.div``;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("1deps", "sub1", null, [
    getItem("2deps", "1"),
    getItem("2deps", "2"),
    getItem("2deps", "3"),
    getItem("2deps", "4"),
  ]),
  getItem("1deps", "sub2", null, [
    (getItem("2deps", "5"),
    getItem("2deps", "6"),
    getItem("2deps", "sub3", null, [
      getItem("3deps", "7"),
      getItem("3deps", "8"),
    ])),
  ]),
  getItem("1deps", "sub4", null, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const JumpToSection = () => {
  return (
    <JumpToSectionWrapper>
      <JumpToSectionStyle>여기서 부터 시작이야</JumpToSectionStyle>
    </JumpToSectionWrapper>
  );
};

export default JumpToSection;
