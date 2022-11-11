import { SBScroll } from "./Scroll";

export default {
  title: "common/scroll",
  component: SBScroll,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Scroll은 컨텐츠의 길이가 창 전체 세로보다 길 때 생성된다. GUI의 통일성을 위해 디폴트 스크롤바 사용 대신 커스텀 스크롤바 사용을 권장한다.",
  },
};

const Template = (args) => <SBScroll {...args} />;

export const ScrollTemplate = Template.bind({});

ScrollTemplate.args = {
  state: "White",
};
