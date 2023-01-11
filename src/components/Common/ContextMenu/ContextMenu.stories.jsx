import { ContextMenu, SBContextMenuTrigger } from "./ContextMenu_Custom";

export default {
  title: "common/ContextMenu_Custom",
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
  items: [
    { separator: true },
    {
      prefixIcon: "Icon",
      itemTitle: "아이콘",
    },
    {
      prefixIcon: "Checkbox",
      itemTitle: "체크박스",
    },
    { separator: true },
    {
      prefixIcon: "Label",
      itemTitle: "라벨",
      items: [
        {
          title: "Deps1",
          items: [
            { separator: true },
            {
              prefixIcon: "Icon",
              itemTitle: "Deps1아이콘",
            },
            {
              prefixIcon: "Checkbox",
              itemTitle: "Deps1체크박스",
            },
            {
              prefixIcon: "Label",
              itemTitle: "Deps1라벨",
            },
            {
              itemTitle: "Deps1Prefix없음",
            },
          ],
        },
      ],
    },
    {
      itemTitle: "Prefix없음",
      items: [
        {
          title: "Deps1",
          items: [
            { separator: true },
            {
              prefixIcon: "Icon",
              itemTitle: "Deps1아이콘",
              items: [
                {
                  title: "Deps2",
                  items: [
                    {
                      prefixIcon: "Icon",
                      itemTitle: "Deps2아이콘",
                    },
                    { separator: true },
                    {
                      prefixIcon: "Checkbox",
                      itemTitle: "Deps2체크박스",
                    },
                    {
                      prefixIcon: "Label",
                      itemTitle: "Deps2라벨",
                    },
                    {
                      itemTitle: "Deps2Prefix없음",
                    },
                  ],
                },
              ],
            },
            {
              prefixIcon: "Checkbox",
              itemTitle: "Deps1체크박스",
            },
            {
              prefixIcon: "Label",
              itemTitle: "Deps1라벨",
            },
            { separator: true },
            {
              itemTitle: "Deps1Prefix없음",
            },
          ],
        },
      ],
    },
  ],
};
