import { ContextMenu, SBContextMenuTrigger } from "./ContextMenu_Custom";

export default {
  title: "10월 2주차/ContextMenu_Custom",
  component: ContextMenu,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Context Menu 컴포넌트는 Kebab 메뉴 클릭, 혹은 마우스 우클릭 등의 경우에 호출되는 메뉴이다. 리스트 중 단일 혹은 다수를 선택하는 Dropdown과 달리 기능을 선택하는 경우에 Context Menu를 사용한다. On/Off 같은 단순한 기능도 제공한다.",
    docs: {
      description: {
        component: "docs 페이지에서 우측 마우스 클릭은 보이지 않습니다.",
      },
    },
  },
};

const Template = (args) => <SBContextMenuTrigger {...args} />;

export const ContextMenuTemplate = Template.bind({});

ContextMenuTemplate.args = {
  title: "기본 타이틀",
  contextMenuItemProps: [
    {
      prefixIcon: "Icon",
      itemTitle: "아이콘1",
    },
    {
      prefixIcon: "Checkbox",
      itemTitle: "체크박스1",
    },
    {
      prefixIcon: "Label",
      itemTitle: "라벨1",
      contextMenuItemChildProps: [
        {
          title: "타이틀3",
          contextMenuItemProps: [
            {
              prefixIcon: "Icon",
              itemTitle: "아이콘3",
            },
            {
              prefixIcon: "Checkbox",
              itemTitle: "체크박스3",
            },
            {
              prefixIcon: "Label",
              itemTitle: "라벨3",
            },
            {
              itemTitle: "아무것도없는3",
            },
          ],
        },
      ],
    },
    {
      itemTitle: "아무것도없는1",

      contextMenuItemChildProps: [
        {
          title: "타이틀1",
          contextMenuItemProps: [
            {
              prefixIcon: "Icon",
              itemTitle: "아이콘2",
              contextMenuItemChildProps: [
                {
                  title: "타이틀1",
                  contextMenuItemProps: [
                    {
                      prefixIcon: "Icon",
                      itemTitle: "아이콘2",
                    },
                    {
                      prefixIcon: "Checkbox",
                      itemTitle: "체크박스2",
                    },
                    {
                      prefixIcon: "Label",
                      itemTitle: "라벨2",
                    },
                    {
                      itemTitle: "아무것도없는2",
                    },
                  ],
                },
              ],
            },
            {
              prefixIcon: "Checkbox",
              itemTitle: "체크박스2",
            },
            {
              prefixIcon: "Label",
              itemTitle: "라벨2",
            },
            {
              itemTitle: "아무것도없는2",
            },
          ],
        },
      ],
    },
  ],
};
