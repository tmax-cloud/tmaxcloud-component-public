import { Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

type Dialog_NormalPropsType = {
  state:
    | "Normal"
    | "Alert"
    | "AlertIcon"
    | "ErrorMsg"
    | "InputBox"
    | "RadioButton";
  /** 헤더 */
  title: React.ReactNode;
  /** 메시지 영역 */
  content: React.ReactNode;
  /** 노출 여부 */
  isModalVisible: boolean;
  /** 닫기 버튼 클릭 시 이벤트. 개발자 도구에서 확인 가능*/
  handleCancel: () => void;
  /** 버튼 갯수. 아래의 footerButton과 연결되어 작동하므로 같이 수정해 주어야함*/
  buttonCount: number;
  /** 버튼 컴포넌트. 스토리북 내 설정 불가 */
  footerButton: React.ReactNode;
};

const Dialog_NormalStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    display: flex;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    padding: 3rem 3rem 3.2rem 3rem;
    margin: 0 auto;
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0 3rem;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;

const Dialog_AlertStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    padding-top: 6rem;
    border-radius: 12px;
    padding-bottom: 2rem;
    text-align: center;
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    padding: 6rem 3rem 2rem 3rem;
    margin: 0 auto;
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0 3rem;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;

const Dialog_Alert_IconStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    padding-top: 4rem;
    border-radius: 12px;
    padding-bottom: 1rem;
    text-align: center;
    img {
      margin-bottom: 1.3rem;
    }
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;
const Dialog_Error_MsgStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    display: flex;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    height: 7.8rem;
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0 3rem;
    div + div {
      padding-top: 0.2rem;
      color: ${({ theme }) => theme.color.error._100};
    }
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;
const Dialog_InputBoxStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    display: flex;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    height: 7.8rem;
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0 3rem;
    div + div {
      padding-top: 1.8rem;
      padding-bottom: 1rem;
      color: ${({ theme }) => theme.color.gray._900};
    }
    input {
      width: 100%;
      height: 3.2rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      border-radius: 8px;
      border: none;
      background-color: ${({ theme }) => theme.color.gray._100};
      :focus-visible {
        border: none;
      }
    }
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;
const Dialog_RadioButtonStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    display: flex;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    height: 7.8rem;
    .ant-modal-title {
      ${({ theme }) => theme.font.body1_700};
      color: ${({ theme }) => theme.color.gray._900};
    }
    border-bottom: none;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._600};
    padding: 0 3rem;
    div + div {
      padding-top: 2rem;
      color: ${({ theme }) => theme.color.gray._900};
      .ant-radio-group {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
      .ant-space-item {
        padding: 0;
      }
    }
  }
  .ant-modal-footer {
    border-top: none;
    padding: 0;
  }
`;
const ThreeWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3.2rem 2rem 2rem 2rem;
  flex-direction: column;
  gap: 1rem;
`;
const TwoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 2rem 2rem 2rem;
  flex-direction: row;
  gap: 0.8rem;
  button {
    width: 100%;
  }
`;
const OneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 4rem 2rem 2rem 2rem;
  button {
    width: 100%;
  }
`;
// footer 는 전부 상속 및 버튼 수에 따라 layout을 달리하도록 컴포넌트 별도 생성
const Dialog_Normal = ({
  title,
  content,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}: Dialog_NormalPropsType) => {
  return (
    <Dialog_NormalStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    >
      {content && <div>{content}</div>}
    </Dialog_NormalStyle>
  );
};

const Dialog_Alert = ({
  title,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}) => {
  return (
    <Dialog_AlertStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    />
  );
};

const Dialog_Alert_Icon = ({
  title,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}) => {
  return (
    <Dialog_Alert_IconStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    />
  );
};

const Dialog_Error_Msg = ({
  title,
  content,
  subAction,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}) => {
  return (
    <Dialog_Error_MsgStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    >
      {content && <div>{content}</div>}
    </Dialog_Error_MsgStyle>
  );
};
const Dialog_InputBox = ({
  title,
  content,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}) => {
  return (
    <Dialog_InputBoxStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    >
      {content && <div>{content}</div>}
    </Dialog_InputBoxStyle>
  );
};
const Dialog_RadioButton = ({
  title,
  content,
  isModalVisible,
  handleCancel,
  buttonCount,
  footerButton,
}) => {
  return (
    <Dialog_RadioButtonStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button_Layout buttonCount={buttonCount}>{footerButton}</Button_Layout>
      }
      closable={false}
    >
      {content && <div>{content}</div>}
    </Dialog_RadioButtonStyle>
  );
};
/** 버튼 갯수에 따라 분류 */
const Button_Layout = ({ buttonCount, children }) => {
  switch (buttonCount) {
    case 3:
      return <ThreeWrapper>{children}</ThreeWrapper>;
    case 2:
      return <TwoWrapper>{children}</TwoWrapper>;
    default:
      return <OneWrapper>{children}</OneWrapper>;
  }
};
/** 스토리북 용 Button을 포함한 Dialog_Variable */
const SBDialog_Variable = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalActive = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button onClick={handleModalActive}>
        스토리북 용 Dialog on/off 버튼
      </button>

      <Dialog_Variable
        {...props}
        isModalVisible={isModalVisible}
        handleCancel={handleModalCancel}
        footerButton={<button onClick={handleModalCancel}>버튼버튼버튼</button>}
      />
    </>
  );
};

const Dialog_Variable = (props) => {
  switch (props.state) {
    case "Normal":
      return <Dialog_Normal {...props} />;
    case "Alert":
      return <Dialog_Alert {...props} />;
    case "AlertIcon":
      return <Dialog_Alert_Icon {...props} />;
    case "ErrorMsg":
      return <Dialog_Error_Msg {...props} />;
    case "InputBox":
      return <Dialog_InputBox {...props} />;
    case "RadioButton":
      return <Dialog_RadioButton {...props} />;
  }
};

Dialog_Variable.defaultProps = {
  state: "Normal",
  title: "Hello",
  content: "메시지입니다",
  isModalVisible: false,
  handleCancel: () => console.log("button click"),
  buttonCount: 1,
  footerButton: <Button state="SecondaryC" propSize="L" />,
};

export default Dialog_Variable;
export { SBDialog_Variable };
