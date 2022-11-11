import { Tooltip } from "antd";
import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";

type sbPropType = {
  /** 툴팁에 들어갈 텍스트 */
  title: ReactNode;
  /** 툴팁 노출 위치 */
  placement:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";

  /** 툴팁 작동 방식 */
  trigger: "hover" | "focus" | "click" | "contextMenu";
};
type propType = {
  /** 툴팁에 들어갈 텍스트 */
  title: ReactNode;
  /** 툴팁 노출 위치 */
  placement:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";

  /** 툴팁 작동 방식 */
  trigger: "hover" | "focus" | "click" | "contextMenu";
  children: ReactNode;
};

const TooltipStyle = createGlobalStyle`
.custom_tooltip{
  max-width: 18.3rem;
  padding:0;
  ${({ theme }) => theme.font.body4_400};

  /** 화살표 클래스 */
  .ant-tooltip-arrow{
    display:none;
  }
  /** 내부 스타일 클래스 */
  .ant-tooltip-inner{
    min-width: auto;
    min-height:2.4rem;
    word-break: break-all;
    padding: .3rem .8rem;
    color: ${({ theme }) => theme.color.white._100};
    background-color: ${({ theme }) => theme.color.black._100};
  }
}
`;

/** 스토리북용 TooltipCustom */
const SBTooltipCustom = ({ title, placement, trigger }: sbPropType) => {
  return (
    <>
      <TooltipStyle />
      <Tooltip
        title={title}
        placement={placement}
        trigger={trigger}
        overlayClassName="custom_tooltip"
      >
        <img src="/asset/images/icon/dummy_icon.svg" alt="dummy" />
      </Tooltip>
    </>
  );
};
/** 개발용 Tooltip */
const TooltipCustom = ({ title, placement, trigger, children }: propType) => {
  return (
    <>
      <TooltipStyle />
      <Tooltip
        title={title}
        placement={placement}
        trigger={trigger}
        overlayClassName="custom_tooltip"
      >
        {children}
      </Tooltip>
    </>
  );
};
SBTooltipCustom.defaultProps = {
  title: "test",
  placement: "bottom",
  trigger: "hover",
};
TooltipCustom.defaultProps = {
  title: "test",
  placement: "bottom",
  trigger: "hover",
  children: <img src="/asset/images/icon/dummy_icon.svg" alt="dummy" />,
};
export { SBTooltipCustom, TooltipCustom };
