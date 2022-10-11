import { SBDialog, Dialog } from "./Dialog";

export default {
  title: "Common/Dialog",
  component: Dialog,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Dialog는 기본 화면의 z-order 상위에 호출되는 컴포넌트이며, 중요 정보 제공, 설정 변경, 아이템 생성 및 수정 등 역할을 한다. Modal 속성을 가지며, 호출된 경우 제어권을 독점하여 다이얼로그가 종료되기 전까지 다른 작업이 불가하다.",
  },
};

const Template = (args) => <SBDialog {...args} />;

export const SBDialogTemplate = Template.bind({});

SBDialogTemplate.args = {
  title: "제목",
  contents: "내용",
  footerButton: <button>닫기처럼 보이지만 닫을 수 없는 버튼</button>,
  isModalVisible: false,
  handleCancel: () => console.log("닫기 버튼 클릭"),
};
