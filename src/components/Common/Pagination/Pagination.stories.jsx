import Pagination from "./Pagination";

export default {
  title: "개발중/Pagination",
  component: Pagination,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Pagination은 컨텐츠가 일정 이상 쌓여서 여러 페이지에 걸쳐 나눠져있음을 나타낸다. 사용자는 '다음', '이전', 페이지 번호와 같은 링크를 사용하여 페이지 간에 이동할 수 있다. 이때 검색결과는 한 번에 한 페이지씩 표시된다.",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Template = (args) => <Pagination {...args} />;

export const PaginationTemplate = Template.bind({});

PaginationTemplate.args = {
  state: "Default",
  nowPage: 1,
  unit: 5,
  allPage: 10,
};
