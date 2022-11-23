import React from "react";
import styled from "styled-components";

const IconWrapper = styled.svg`
  width: 30px;
  height: 30px;
  fill: currentColor;
  stroke: currentColor;
  color: ${({ color }) => color};
`;

const Icontest = (props) => {
  console.log(props.children);
  return <IconWrapper color={props.color}>{props.children}</IconWrapper>;
};

export { Icontest };
