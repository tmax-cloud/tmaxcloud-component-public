import { Notification, SBNotification } from "./Notification";
import styled from "styled-components";

export default {
  title: "update/Notification",
  component: SBNotification,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle:
      "Toast Popup과 유사한 형태를 지니고 있으나 목적이 다르다. 사용자의 행동이 관여된 문제/정보에 대한 알림을 주어야한다.",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Template = (args) => <SBNotification {...args} />;

export const NotificationTemplate = Template.bind({});

NotificationTemplate.args = { state: "Success", title: "Notification" };

export const NotificationContentTemplate = Template.bind({});

NotificationContentTemplate.args = {
  state: "Success",
  title: "Notification",
  content: (
    <div>
      복잡한 div형도 가능
      <br /> 합니다
      <br />
      테스트텍스트
    </div>
  ),
};

export const NotificationComplexTemplate = Template.bind({});

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  hr {
    width: 100%;
    margin: 0;
    border-top: 0.1rem solid #f44336;
  }
`;
const FirstContent = styled.div`
  margin-left: 2.4rem;
  color: ${({ theme }) => theme.color.gray._900};
  span {
    color: ${({ theme }) => theme.color.gray._700};
  }
`;
const SecondContent = styled.div`
  button {
    padding: 0.75rem 1.2rem;
    color: ${({ theme }) => theme.color.error._font};
  }
`;
NotificationComplexTemplate.args = {
  state: "Error",
  title: "Notification",
  content: (
    <Wrapper>
      <FirstContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ut{" "}
        <span>interdum</span>
        arcu urna turpis aliquam ac vehicula.
      </FirstContent>
      <hr />
      <SecondContent>
        <button>Retry</button>
      </SecondContent>
    </Wrapper>
  ),
};
