import { Radio, Space } from "antd";
import Button from "../Button/Button";
import Dialog_Variable, { SBDialog_Variable } from "./Dialog_Variable";
import {
  Dialog_VariableCustom,
  SBDialog_Variable_Custom,
} from "./Dialog_VariableCustom";

export default {
  title: "Common/Dialog_VariableCustom",
  component: SBDialog_Variable_Custom,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Dialog : Alert는 중요한 정보 제공, 혹은 사용자의 결정 등 필수적인 액션이 필요한 경우 호출하는 모달 형태의 컴포넌트이다. 호출 시, 제어권을 독점하여 종료 전까지 다른 작업이 불가하다.",
  },
};

const Template = (args) => <SBDialog_Variable_Custom {...args} />;

export const Dialog_VariableCustomTemplate = Template.bind({});
Dialog_VariableCustomTemplate.args = { state: "Normal" };
