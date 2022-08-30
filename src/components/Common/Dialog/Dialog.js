import { Modal } from "antd";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const DialogWrapper = styled.div``;
const Modal_CustomStyle = styled(Modal)`
  .ant-modal-header {
    ${({ theme }) => theme.font.body1_700};
    border-bottom: none;
    padding-bottom: 3.2rem;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body1_400};
    overflow: scroll;
    max-height: 41.8rem;
    padding: 0 2rem 3rem 2rem;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem;
    padding: 3rem;
    border-top: none;
  }
`;

const Dialog = ({
  title,
  contents,
  buttonFooter,
  isModalVisible,
  handleCancel,
}) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  // 전부 상위 컴포넌트에서 지원 및 buttonFooter은 개별로 작성
  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };
  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };
  return (
    <DialogWrapper>
      <Modal_CustomStyle
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        centered={true}
        footer={buttonFooter}
        width="36rem"
      >
        {contents}
      </Modal_CustomStyle>
    </DialogWrapper>
  );
};

export default Dialog;
