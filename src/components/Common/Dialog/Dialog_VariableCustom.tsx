import { Modal, Radio } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Controller from "../Controller/Controller";
import { InputBox } from "../InputBox/InputBox";
type SBDialogPropsType = {
  state: "Normal" | "Alert" | "AlertIcon" | "Error" | "InputBox" | "Radio";
};
type DialogPropsType = {
  /** subtext의 각 영역은 Div로 구분 */
  children: React.ReactNode;
};
type DialogFooterPropsType = DialogPropsType & {
  /** 버튼 갯수 */
  buttonCount: number;
};
const Dialog_VariableCustomWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 100;
`;
const Dialog_VariableCustomMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.45);
`;
const Dialog_VariableCustomModalWrapper = styled.div`
  width: 36rem;
  min-height: 19.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.2rem;
  box-shadow: 0px 0px 20px 2px rgba(19, 24, 48, 0.1);
  background-color: ${({ theme }) => theme.color.white._100};
  z-index: 102;
`;
const DialogTitleWithSubTextWrapper = styled.div`
  ${({ theme }) => theme.font.body1_700};
  padding: 3rem 3rem 3.2rem 3rem;
  margin: 0 auto;
  text-align: center;
`;
const DialogTitleWithoutSubTextWrapper = styled.div`
  ${({ theme }) => theme.font.body1_700};
  padding: 6rem 3rem 2rem 3rem;
  margin: 0 auto;
  text-align: center;
`;
const DialogTitleWithoutSubTextWithIconWrapper = styled.div`
  ${({ theme }) => theme.font.body1_700};
  padding: 4rem 3rem 1rem 3rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;
const DialogSubtextWithErrorWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  gap: 0.4rem;
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.gray._600};
  div + div {
    color: ${({ theme }) => theme.color.error._100};
    ${({ theme }) => theme.font.body3_400};
  }
`;
const DialogSubtextWithInputBoxWrapper = styled.div`
  display: flex;
  padding: 0 3rem 1rem 3rem;
  flex-direction: column;
  gap: 1.8rem;
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.gray._600};
`;
const DialogSubtextWithRadioButtonWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  gap: 2rem;
  ${({ theme }) => theme.font.body2_400};
  color: ${({ theme }) => theme.color.gray._600};
  div + div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;
const ThreeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3.2rem 2rem 2rem 2rem;
  flex-direction: column;
  gap: 1rem;
`;
const TwoButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 2rem 2rem 2rem;
  flex-direction: row;
  gap: 0.8rem;
  button {
    width: 100%;
  }
`;
const OneButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 4rem 2rem 2rem 2rem;
  button {
    width: 100%;
  }
`;
/** 스토리북 용 Button을 포함한 Dialog_Variable Custom버전 */
const SBDialog_Variable_Custom = ({ state }: SBDialogPropsType) => {
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

      <Dialog_VariableCustom
        isModalVisible={isModalVisible}
        handleCancel={handleModalCancel}
      >
        {state === "Normal" && (
          <>
            <Dialog_VariableCustom.TitleWithSubText>
              hello 이것은 텍스트
            </Dialog_VariableCustom.TitleWithSubText>
            <Dialog_VariableCustom.SubtextWithError>
              <div>subtextsubtextsubtext subtextsubtextsubtextsubtext</div>
            </Dialog_VariableCustom.SubtextWithError>
          </>
        )}
        {state === "Alert" && (
          <Dialog_VariableCustom.TitleWithoutSubText>
            hello 이것은 텍스트
          </Dialog_VariableCustom.TitleWithoutSubText>
        )}
        {state === "AlertIcon" && (
          <Dialog_VariableCustom.TitleWithoutSubTextWithIcon>
            <img src="/asset/images/Icon/dummy_icon.svg" alt="더미" />
            hello 이것은 텍스트
          </Dialog_VariableCustom.TitleWithoutSubTextWithIcon>
        )}
        {state === "Error" && (
          <>
            <Dialog_VariableCustom.TitleWithSubText>
              hello 이것은 텍스트
            </Dialog_VariableCustom.TitleWithSubText>
            <Dialog_VariableCustom.SubtextWithError>
              <div>안녕하세요</div>
              <div>안녕못해요</div>
            </Dialog_VariableCustom.SubtextWithError>
          </>
        )}
        {state === "InputBox" && (
          <>
            <Dialog_VariableCustom.TitleWithSubText>
              hello 이것은 텍스트
            </Dialog_VariableCustom.TitleWithSubText>
            <Dialog_VariableCustom.SubtextWithInputBox>
              <div>하이</div>
              <InputBox
                state="Fill"
                value=""
                maxLength={50}
                allowClear={false}
                placeholder="placeholder"
                error={false}
                disabled={false}
              />
            </Dialog_VariableCustom.SubtextWithInputBox>
          </>
        )}
        {state === "Radio" && (
          <>
            <Dialog_VariableCustom.TitleWithSubText>
              hello 이것은 텍스트
            </Dialog_VariableCustom.TitleWithSubText>
            <Dialog_VariableCustom.SubtextWithRadioButton>
              <div>hello</div>
              <Radio.Group>
                <Radio value={1}>1</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
              </Radio.Group>
            </Dialog_VariableCustom.SubtextWithRadioButton>
          </>
        )}

        <Dialog_VariableCustom.Button_Layout buttonCount={3}>
          <button onClick={handleModalCancel}>버튼버튼버튼</button>
          <button onClick={handleModalCancel}>버튼버튼버튼</button>
          <button onClick={handleModalCancel}>버튼버튼버튼</button>
        </Dialog_VariableCustom.Button_Layout>
      </Dialog_VariableCustom>
    </>
  );
};
/** Dialog_Variable 메인 */
const Dialog_VariableCustomMain = ({
  isModalVisible,
  handleCancel,
  children,
}) => {
  return (
    isModalVisible && (
      <Dialog_VariableCustomWrapper>
        <Dialog_VariableCustomMask onClick={handleCancel} />
        <Dialog_VariableCustomModalWrapper>
          {children}
        </Dialog_VariableCustomModalWrapper>
      </Dialog_VariableCustomWrapper>
    )
  );
};
const DialogTitleWithSubText = ({ children }: DialogPropsType) => {
  return (
    <DialogTitleWithSubTextWrapper>{children}</DialogTitleWithSubTextWrapper>
  );
};
const DialogTitleWithoutSubText = ({ children }: DialogPropsType) => {
  return (
    <DialogTitleWithoutSubTextWrapper>
      {children}
    </DialogTitleWithoutSubTextWrapper>
  );
};
const DialogTitleWithoutSubTextWithIcon = ({ children }: DialogPropsType) => {
  return (
    <DialogTitleWithoutSubTextWithIconWrapper>
      {children}
    </DialogTitleWithoutSubTextWithIconWrapper>
  );
};
/**div 2개로 텍스트와 에러메시지 영역 구분 */
const DialogSubtextWithError = ({ children }: DialogPropsType) => {
  return (
    <DialogSubtextWithErrorWrapper>{children}</DialogSubtextWithErrorWrapper>
  );
};
const DialogSubtextWithInputBox = ({ children }: DialogPropsType) => {
  return (
    <DialogSubtextWithInputBoxWrapper>
      {children}
    </DialogSubtextWithInputBoxWrapper>
  );
};
const DialogSubtextWithRadioButton = ({ children }: DialogPropsType) => {
  return (
    <DialogSubtextWithRadioButtonWrapper>
      {children}
    </DialogSubtextWithRadioButtonWrapper>
  );
};
const Button_Layout = ({ buttonCount, children }: DialogFooterPropsType) => {
  switch (buttonCount) {
    case 3:
      return <ThreeButtonWrapper>{children}</ThreeButtonWrapper>;
    case 2:
      return <TwoButtonWrapper>{children}</TwoButtonWrapper>;
    default:
      return <OneButtonWrapper>{children}</OneButtonWrapper>;
  }
};

SBDialog_Variable_Custom.defaultProps = {
  state: "Normal",
};

export { SBDialog_Variable_Custom };

export const Dialog_VariableCustom = Object.assign(Dialog_VariableCustomMain, {
  TitleWithSubText: DialogTitleWithSubText,
  TitleWithoutSubText: DialogTitleWithoutSubText,
  TitleWithoutSubTextWithIcon: DialogTitleWithoutSubTextWithIcon,
  SubtextWithError: DialogSubtextWithError,
  SubtextWithInputBox: DialogSubtextWithInputBox,
  SubtextWithRadioButton: DialogSubtextWithRadioButton,
  Button_Layout: Button_Layout,
});
