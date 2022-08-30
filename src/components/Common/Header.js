import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Gnb } from "..";
import Link from "next/link";
import { useKeycloak } from "@react-keycloak/ssr";
import url from "../utils/url";

export default function Header(props) {
  const GnbMegaMenuRef = useRef(null);
  const [title, setTitle] = useState("");
  const [bGTransparent, setBGTransparent] = useState(false);
  const { keycloak } = useKeycloak();

  const handleLogin = () => {
    if (keycloak && !keycloak.authenticated) {
      keycloak.login();
    }
  };
  const handleLogout = () => {
    if (keycloak && keycloak.authenticated) {
      keycloak.logout({ redirectUri: document.location.origin });
    }
  };
  const ScrollEvent = () => {
    if ((window.scrollY || document.documentElement.scrollTop) > 72)
      setBGTransparent(false);
    else {
      setBGTransparent(true);
    }
  };
  useEffect(() => {
    console.log(props);
    if (props.headerTransparent) {
      setBGTransparent(true);
      window.addEventListener("scroll", ScrollEvent);
    } else setBGTransparent(false);

    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, [props.headerTransparent]);
  return (
    <>
      {props.headerTransparent ? <></> : <BackBlock />}
      <Layout bGTransparent={bGTransparent}>
        <Wrapper>
          <HideTitle>SuperCloud</HideTitle>

          <a href="/">
            <img src="/asset/images/img_tmaxcloud_logo.svg" alt="logo" />
          </a>

          <HideTitle>네비게이션 영역</HideTitle>
          <GnbMegaMenu ref={GnbMegaMenuRef}>
            <Gnb setTitle={setTitle} title={title} />
          </GnbMegaMenu>
          <SideTool>
            <div>
              <a href="/contact">문의하기</a>
            </div>
            <div>KR</div>
            <LogInOut>
              {keycloak.authenticated ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <button onClick={handleLogin}>로그인</button>
              )}
            </LogInOut>
            <SuperCloudButton onClick={() => window.open(url.supercloud)}>
              SuperCloud
            </SuperCloudButton>
          </SideTool>
        </Wrapper>
      </Layout>
    </>
  );
}
const BackBlock = styled.div`
  width: 100%;
  height: 72px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
const Layout = styled(FlexBox)`
  width: 100%;
  height: 72px;
  padding: 0 100px 0 52px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  border-bottom: 1px solid #dfdfdf;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.5s;
  ${(props) =>
    props.bGTransparent &&
    css`
      position: absolute;
      color: #ffffff;
      background-color: transparent;
    `}
`;

const HideTitle = styled.h1`
  display: none;
`;

const Wrapper = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
`;
const GnbMegaMenu = styled.ul`
  display: flex;
  max-width: 857px;
  width: 100%;
  justify-content: space-between;
`;
const SideTool = styled(FlexBox)`
  width: 100%;
  max-width: 349px;
  justify-content: space-between;
`;
const LogInOut = styled.div`
  cursor: pointer;
  font-weight: bold;
`;
const SuperCloudButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 8px 27px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
`;
