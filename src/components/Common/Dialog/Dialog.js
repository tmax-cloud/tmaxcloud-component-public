import { Modal } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const DialogWrapper = styled.div``;
const Modal_CustomStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-header {
    ${({ theme }) => theme.font.body1_700};
    border-bottom: none;
    padding: 3rem 3rem 3.2rem 3rem;
    border-radius: 12px;
  }
  .ant-modal-body {
    ${({ theme }) => theme.font.body1_400};
    overflow: scroll;
    max-height: 41.8rem;
    padding: 0 3rem 3rem 3rem;
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
  .ant-modal-title {
    line-height: 1.6rem;
  }
  .ant-modal-close-x {
    line-height: 5.6rem;
  }
`;

const Dialog = ({
  title,
  contents,
  footerButton,
  isModalVisible,
  handleCancel,
}) => {
  return (
    <DialogWrapper>
      <Modal_CustomStyle
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        centered={true}
        footer={footerButton}
        width="36rem"
      >
        {contents}
      </Modal_CustomStyle>
    </DialogWrapper>
  );
};

Dialog.propTypes = {
  /** 타이틀 영역 */
  title: PropTypes.string,
  /** 컨텐츠 영역 */
  contents: PropTypes.string,
  /** 노출 여부 */
  isModalVisible: PropTypes.bool,
  /** 닫기 버튼 클릭 이벤트 */
  handleCancel: PropTypes.func,
  /** Dialog 창 하단의 버튼 영역. */
  footerButton: PropTypes.node,
};

Dialog.defaultProps = {
  title: "타이틀",
  contents: "내용",
  footerButton: <button>버튼</button>,
  isModalVisible: false,
  handleCancel: () => console.log("test"),
};

export default Dialog;
