import PropTypes from "prop-types";
import { useState } from "react";
import styled, { css } from "styled-components";

const SingleWrapper = styled.div`
  animation-name: ${({ visible }) => (visible ? "FadeIn" : "FadeOut")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation-fill-mode: both;
  animation-duration: 0.5s;
  transition-timing-function: ease-in;

  display: flex;
  opacity: 0;
  gap: 0.8rem;
  flex-direction: column;
  position: fixed;
  min-width: 10rem;
  min-height: 2rem;
  bottom: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.6rem 2rem;
  border-radius: 4px;
  ${({ theme, state }) => {
    switch (state) {
      case "Error":
        return css`
          color: ${theme.color.error._font};
          background-color: ${theme.color.error._fill};
          border: 1px solid ${theme.color.error._100};
        `;
      case "Warning":
        return css`
          color: ${theme.color.warning._font};
          background-color: ${theme.color.warning._fill};
          border: 1px solid ${theme.color.warning._100};
        `;
      case "Notice":
        return css`
          color: ${theme.color.notice._font};
          background-color: ${theme.color.notice._fill};
          border: 1px solid ${theme.color.notice._100};
        `;
      case "Success":
        return css`
          color: ${theme.color.success._font};
          background-color: ${theme.color.success._fill};
          border: 1px solid ${theme.color.success._100};
        `;
      case "Info":
        return css`
          color: ${theme.color.info._font};
          background-color: ${theme.color.info._fill};
          border: 1px solid ${theme.color.info._100};
        `;
      default:
        return css`
          color: ${theme.color.gray._500};
          background-color: ${theme.color.gray._100};
          border: 1px solid ${theme.color.gray._400};
        `;
    }
  }}
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ContentWrapper = styled.div``;

/** 스토리북용 알림 */
const SBNotification = (props) => {
  const [visible, isVisible] = useState(null);

  const VisibleStateBackToFalse = () => {
    return setTimeout(() => {
      isVisible(false);
    }, 3000);
  };

  const onClick = () => {
    isVisible(true);
    VisibleStateBackToFalse();
  };

  return (
    <div>
      <button onClick={onClick}>버튼입니다. 눌러주세요.</button>
      {visible !== null && <Notification {...props} visible={visible} />}
    </div>
  );
};
/** 개발용 알림 */
const Notification = ({ state, title, content, visible }) => {
  return (
    <SingleWrapper state={state} visible={visible}>
      <TitleWrapper>
        <img src="asset/images/Icon/dummy_icon.svg" alt="dummy" />
        <span>{title}</span>
      </TitleWrapper>
      {content && <ContentWrapper>{content}</ContentWrapper>}
    </SingleWrapper>
  );
};
SBNotification.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf([
    "Success",
    "Error",
    "Notice",
    "Warning",
    "Info",
    "Default",
  ]),
  /** 타이틀 */
  title: PropTypes.string,
  /** 컨텐츠 부분. 텍스트나 component를 입력할 수 있다. 스토리북 내 설정 불가 */
  content: PropTypes.node,
};

SBNotification.defaultProps = {
  state: "success",
  title: "Notification Message",
};

export { SBNotification, Notification };
