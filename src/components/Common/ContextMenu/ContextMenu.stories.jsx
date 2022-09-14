import { ContextMenu } from "./ContextMenu";

export default {
  title: "개발중/ContextMenu",
  component: ContextMenu,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Context Menu 컴포넌트는 Kebab 메뉴 클릭, 혹은 마우스 우클릭 등의 경우에 호출되는 메뉴이다. 리스트 중 단일 혹은 다수를 선택하는 Dropdown과 달리 기능을 선택하는 경우에 Context Menu를 사용한다. On/Off 같은 단순한 기능도 제공한다.",
    docs: {
      description: {
        component: "추후 스토리 요소 도입하여 개선 예정",
      },
    },
  },
};

const Template = (args) => <ContextMenu {...args} />;

export const ContextMenuTemplate = Template.bind({});
