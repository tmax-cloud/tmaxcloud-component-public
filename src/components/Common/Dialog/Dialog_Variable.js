import { Modal } from "antd";
import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const Dialog_NormalStyle = styled(Modal)`
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
  button {
    width: 100%;
  }
`;
// footer 는 전부 상속 및 버튼 수에 따라 layout을 달리하도록 컴포넌트 별도 생성
const Dialog_Normal = ({
  title,
  message,
  subAction,
  isModalVisible,
  handleCancel,
  onClick,
  buttonText,
}) => {
  return (
    <Dialog_NormalStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button
          onClick={onClick}
          propType="PrimaryB"
          propSize="L"
          text={buttonText}
        />
      }
      closable={false}
    >
      {message && <div>{message}</div>}
      {/* {subAction && <div>{subAction}</div>} */}
    </Dialog_NormalStyle>
  );
};

const Dialog_Alert = ({
  title,
  isModalVisible,
  handleCancel,
  onClick,
  buttonText,
}) => {
  return (
    <Dialog_AlertStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <Button
          onClick={onClick}
          propType="PrimaryB"
          propSize="L"
          text={buttonText}
        />
      }
      closable={false}
    />
  );
};

const Dialog_Alert_Icon = ({
  title,
  isModalVisible,
  handleCancel,
  onClick,
  buttonText_left,
  buttonText_right,
}) => {
  return (
    <Dialog_Alert_IconStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <>
          <Button
            onClick={handleCancel}
            propType="SecondaryC"
            propSize="L"
            text={buttonText_left}
          />
          <Button
            onClick={onClick}
            propType="PrimaryB"
            propSize="L"
            text={buttonText_right}
          />
        </>
      }
      closable={false}
    />
  );
};

const Dialog_Error_Msg = ({
  title,
  message,
  subAction,
  isModalVisible,
  handleCancel,
  onClick,
  buttonText_left,
  buttonText_right,
}) => {
  return (
    <Dialog_Error_MsgStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <>
          <Button
            onClick={handleCancel}
            propType="SecondaryC"
            propSize="L"
            text={buttonText_left}
          />
          <Button
            onClick={onClick}
            propType="PrimaryB"
            propSize="L"
            text={buttonText_right}
          />
        </>
      }
      closable={false}
    >
      {message && <div>{message}</div>}
      {subAction && <div>{subAction}</div>}
    </Dialog_Error_MsgStyle>
  );
};
const Dialog_InputBox = ({
  title,
  message,
  subAction,
  isModalVisible,
  handleCancel,
  onClick,
  buttonText_left,
  buttonText_right,
}) => {
  return (
    <Dialog_InputBoxStyle
      width="36rem"
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      centered={true}
      footer={
        <>
          <Button
            onClick={handleCancel}
            propType="SecondaryC"
            propSize="L"
            text={buttonText_left}
          />
          <Button
            onClick={onClick}
            propType="PrimaryB"
            propSize="L"
            text={buttonText_right}
          />
        </>
      }
      closable={false}
    >
      {message && <div>{message}</div>}
      {subAction && <div>{subAction}</div>}
    </Dialog_InputBoxStyle>
  );
};
const Dialog_RadioButton = ({
  title,
  message,
  subAction,
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
      {message && <div>{message}</div>}
      {subAction && <div>{subAction}</div>}
    </Dialog_RadioButtonStyle>
  );
};

const Button_Layout = ({ buttonCount, children }) => {
  console.log(buttonCount, children);
  switch (buttonCount) {
    case 3:
      return <ThreeWrapper>{children}</ThreeWrapper>;
    case 2:
      return <TwoWrapper>{children}</TwoWrapper>;
    default:
      return <OneWrapper>{children}</OneWrapper>;
  }
};
export {
  Dialog_Normal,
  Dialog_Alert,
  Dialog_Alert_Icon,
  Dialog_Error_Msg,
  Dialog_InputBox,
  Dialog_RadioButton,
};
