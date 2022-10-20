import styled from "styled-components";
import MenuList from "../../utils/menuList";
/**보류 */
export default function Fnb() {
  return (
    <Layout>
      <FooterLogo
        src="/asset/images/img_tmaxcloud_logo_footer.svg"
        alt="logo"
      />
      <Wrapper>
        {MenuList.map((FirstDeps) => (
          <NavBar key={FirstDeps.title}>
            <FirstD>
              {FirstDeps.link ? (
                <li>
                  <a href={FirstDeps.link}>{FirstDeps.title}</a>
                </li>
              ) : (
                <li>{FirstDeps.title}</li>
              )}
            </FirstD>
            <SecondDWrapper>
              {FirstDeps.children?.map((SecondDeps) => (
                <SecondD key={SecondDeps.title}>
                  <a href={SecondDeps.link}>{SecondDeps.title}</a>
                </SecondD>
              ))}
            </SecondDWrapper>
          </NavBar>
        ))}
      </Wrapper>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  max-width: 792px;
`;
const FooterLogo = styled.img`
  margin-bottom: 50px;
`;
const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavBar = styled.div``;
const FirstD = styled.ul`
  display: block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.28px;
  color: #ffffff;
  margin-bottom: 30px;
`;
const SecondDWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SecondD = styled.li`
  display: block;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #ffffff;
  opacity: 0.7;
`;
