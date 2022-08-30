import styled from "styled-components";
import url from "../utils/url";

export default function FixBanner() {
  return (
    <Wrapper>
      <Text>
        지금바로 티맥스클라우드의
        <br /> 클라우드 플랫폼을 체험해 보세요.
      </Text>
      <Button onClick={() => window.open(url.console)}>체험하기</Button>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  height: 100%;
  min-height: 412px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #45a4da;
`;
const Text = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  margin-bottom: 60px;
`;
const Button = styled.button`
  width: 240px;
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: #006197;
  border-radius: 8px;
  cursor: pointer;
`;
