import { Radio, Space } from "antd";
import Button from "../Button/Button";
import Dialog_Variable, { SBDialog_Variable } from "./Dialog_Variable";
import { SBDialog_Variable_Custom } from "./Dialog_VariableCustom";

export default {
  title: "Common/Dialog_Variable",
  component: Dialog_Variable,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Dialog : Alert는 중요한 정보 제공, 혹은 사용자의 결정 등 필수적인 액션이 필요한 경우 호출하는 모달 형태의 컴포넌트이다. 호출 시, 제어권을 독점하여 종료 전까지 다른 작업이 불가하다.",
  },
};

const Template = (args) => <SBDialog_Variable {...args} />;

export const NormalTemplate = Template.bind({});

NormalTemplate.args = {
  state: "Normal",
  title: "여기는 제목",
  content: "여기는 컨텐츠",
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 1,
  footerButton: <Button state="PrimaryB" propSize="L" text="버튼 텍스트" />,
};

export const AlertTemplate = Template.bind({});

AlertTemplate.args = {
  state: "Alert",
  title: "여기는 제목",
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 1,
  footerButton: <Button state="PrimaryB" propSize="L" text="버튼 텍스트" />,
};

export const AlertIconTemplate = Template.bind({});

AlertIconTemplate.args = {
  state: "AlertIcon",
  title: (
    <>
      <img src="/asset/images/Icon/dummy_icon.svg" alt="더미아이콘" />
      <div>타이틀</div>
    </>
  ),
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 2,
  footerButton: (
    <>
      <Button state="SecondaryC" propSize="L" text="버튼 텍스트1" />
      <Button state="PrimaryB" propSize="L" text="버튼 텍스트2" />
    </>
  ),
};
export const Error_MsgTemplate = Template.bind({});

Error_MsgTemplate.args = {
  state: "ErrorMsg",
  title: "타이틀",
  content: (
    <>
      <div>일반텍스트</div>
      <div>이것은 에러메시지</div>
    </>
  ),
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 2,
  footerButton: (
    <>
      <Button state="SecondaryC" propSize="L" text="버튼 텍스트1" />
      <Button state="PrimaryB" propSize="L" text="버튼 텍스트2" />
    </>
  ),
};

export const InputBoxTemplate = Template.bind({});

InputBoxTemplate.args = {
  state: "InputBox",
  title: "타이틀",
  content: (
    <>
      <div>이것은 내용</div>
      <div>
        <input placeholder="placeholder" />
      </div>
    </>
  ),
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 2,
  footerButton: (
    <>
      <Button state="SecondaryC" propSize="L" text="버튼 텍스트1" />
      <Button state="PrimaryB" propSize="L" text="버튼 텍스트2" />
    </>
  ),
};

export const RadioButtonTemplate = Template.bind({});

RadioButtonTemplate.args = {
  state: "RadioButton",
  title: "타이틀",
  content: (
    <>
      <div>이것은 내용</div>
      <Radio.Group>
        <Space direction="vertical">
          <Radio value={1}>라디오1</Radio>
          <Radio value={2}>라디오2</Radio>
        </Space>
      </Radio.Group>
    </>
  ),
  isModalVisible: false,
  handleCancel: () => console.log("click"),
  buttonCount: 3,
  footerButton: (
    <>
      <Button state="SecondaryC" propSize="L" text="버튼 텍스트1" />
      <Button state="SecondaryC" propSize="L" text="버튼 텍스트2" />
      <Button state="PrimaryB" propSize="L" text="버튼 텍스트3" />
    </>
  ),
};

const NewTemplate = (args) => <SBDialog_Variable_Custom {...args} />;

export const NewTestTemplate = NewTemplate.bind({});
