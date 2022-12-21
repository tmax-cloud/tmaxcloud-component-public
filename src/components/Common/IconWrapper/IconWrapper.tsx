import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

type IconWrapperPropsType = {
  width: string;
  height: string;
  color: string;
  /** SVG 컴포넌트 */
  children: React.ReactElement;
};

const SvgComponent = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    fill: currentColor;
    stroke: currentColor;
    color: ${(props) => props.color};
    path {
      fill: unset;
      stroke: unset;
    }
  }
`;
/** 아이콘 커스텀 컴포넌트 */
const IconWrapper = ({
  width,
  height,
  color,
  children,
}: IconWrapperPropsType) => {
  console.log(children);
  return (
    <SvgComponent width={width} height={height} color={color}>
      {children}
    </SvgComponent>
  );
};

export { IconWrapper };
