import { Modal } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as clearIcon } from "Icon/basic/clear/M.svg";

type DialogPropsType = {
  /** 타이틀 영역 */
  title: string;
  /** 컨텐츠 영역 */
  contents: string;
  /** 모달 창 노출 여부. 스토리북에서 컨트롤 불가 */
  isModalVisible: boolean;
  /** 닫기 버튼 클릭 이벤트 */
  handleCancel: () => void;
  /** Dialog 창 하단의 버튼 영역. */
  footerButton: React.ReactNode;
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
`;
const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.black._50};
`;
const ModalWrapper = styled.div`
  position: fixed;
  width: 36rem;
  min-height: 31.3rem;
  z-index: 1002;
  background-color: ${({ theme }) => theme.color.white._100};
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
`;
const Title = styled.div`
  ${({ theme }) => theme.font.body1_700};
  border-bottom: none;
  padding-bottom: 3.2rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ClearIcon = styled(clearIcon)`
  fill: currentColor;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray._900};
`;
const Content = styled.div`
  ${({ theme }) => theme.font.body1_400};
  overflow: scroll;
  min-height: 14rem;
  max-height: 41.8rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
`;

/** 스토리북 용 Button을 포함한 Dialog */
const SBDialog = (props: DialogPropsType) => {
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

      <Dialog
        {...props}
        isModalVisible={isModalVisible}
        handleCancel={handleModalCancel}
        footerButton={<button onClick={handleModalCancel}>버튼버튼버튼</button>}
      />
    </>
  );
};

/** 기본 Dialog.*/
const Dialog = ({
  title,
  contents,
  isModalVisible,
  handleCancel,
  footerButton,
}: DialogPropsType) => {
  return (
    isModalVisible && (
      <Wrapper>
        <BackgroundWrapper onClick={handleCancel} data-testid="background" />
        <ModalWrapper>
          <Title>
            <span>{title}</span>
            <ClearIcon onClick={handleCancel} />
          </Title>
          <Content>{contents}</Content>
          <div>{footerButton}</div>
        </ModalWrapper>
      </Wrapper>
    )
  );
};

Dialog.defaultProps = {
  title: "타이틀",
  contents: "내용",
  footerButton: <button>버튼</button>,
  isModalVisible: false,
  handleCancel: () => console.log("test"),
};

export { SBDialog, Dialog };
