import { SBScroll } from "./Scroll";

export default {
  title: "9월4주차/scroll",
  component: SBScroll,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Scroll은 컨텐츠의 길이가 창 전체 세로보다 길 때 생성된다. GUI의 통일성을 위해 디폴트 스크롤바 사용 대신 커스텀 스크롤바 사용을 권장한다.",
    docs: {
      description: {
        component:
          "크롬, 사파리, 오페라 브라우저 한정. 여백이 상단에만 존재할 시 radius가 제대로 먹히지 않아 아래에도 동일하게 8px 부여(실제 적용은 .8rem). 실제 scroll은 테스트 필요.",
      },
    },
  },
};

const Template = (args) => <SBScroll {...args} />;

export const ScrollTemplate = Template.bind({});
