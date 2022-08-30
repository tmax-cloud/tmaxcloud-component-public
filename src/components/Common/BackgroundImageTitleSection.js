import styled, { css } from "styled-components";

export default function BackgroundImageTitleSection({
  title,
  subtitle,
  backgroundImage,
}) {
  return (
    <Layout backgroundImage={backgroundImage}>
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>
          <span>{subtitle}</span>
        </Subtitle>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.section`
  padding: 20px;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;
const Wrapper = styled.div`
  color: #ffffff;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 4.4rem;
  font-weight: 400;
  letter-spacing: -0.88px;
  margin-bottom: 30px;
  span {
    font-weight: bold;
  }
`;
const Subtitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: -0.4px;
  span {
    opacity: 0.8;
  }
`;
