import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Fnb } from "..";
import url from "../utils/url";
import DropDown from "./DropDown";
const DropDownLangText = {
  option: [
    { value: "Korean", label: "Korean" },
    // { value: "English", label: "English" },
    // { value: "Chinese", label: "Chinese" },
  ],
};
const DropDownSiteText = {
  option: [
    { value: "TmaxCloud", label: "TmaxCloud" },
    { value: "TmaxSoft", label: "TmaxSoft" },
    { value: "TmaxTibero", label: "TmaxData" },
    { value: "TmaxA&C", label: "TmaxA&C" },
  ],
};
export default function Footer() {
  const langDropdownRef = useRef();
  const siteDropdownRef = useRef();
  const [nowLang, setNowLang] = useState("Korean");
  const [onSelectLang, setOnSelectLang] = useState(false);
  const [onSelectSite, setOnSelectSite] = useState(false);

  const handleDropDown = (e) => {
    if (!langDropdownRef.current.contains(e.target)) setOnSelectLang(false);
    if (!siteDropdownRef.current.contains(e.target)) setOnSelectSite(false);
  };
  const onClickLang = (e) => {
    setNowLang(e.target.value);
  };
  const onClickLink = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case DropDownSiteText.option[0].value: {
        return window.open("https://www.tmax.co.kr/tmaxcloud");
      }
      case DropDownSiteText.option[1].value: {
        return window.open("https://www.tmax.co.kr/tmaxsoft");
      }
      case DropDownSiteText.option[2].value: {
        return window.open("https://www.tmaxtibero.com/main.do");
      }
      case DropDownSiteText.option[3].value: {
        return window.open("https://www.tmax.co.kr/tmaxa-c");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleDropDown);
    return () => {
      window.removeEventListener("mousedown", handleDropDown);
    };
  }, []);
  return (
    <Layout>
      <FnbWrapper>
        <Fnb />
      </FnbWrapper>
      <FooterDescriptionWrapper>
        <FooterDescription>
          <span>
            경기도 성남시 분당구 황새울로258번길 29, 티맥스 수내타워
            <br />
            7층 대표번호 : 031-8018-1000 ㅣ 개인정보 처리방침
            <br />
            Copyright 2022. TmaxA&C Corp. All rights reserved.
          </span>
        </FooterDescription>
        <FooterToolBox>
          <FooterSns>
            <img
              src="/asset/images/Icon/Footer/blog.svg"
              onClick={() => window.open(url.sns.blog)}
              onKeyUp={() => window.open(url.sns.blog)}
              alt="blog"
            />
            <img
              src="/asset/images/Icon/Footer/post.svg"
              onClick={() => window.open(url.sns.post)}
              onKeyUp={() => window.open(url.sns.blog)}
              alt="post"
            />
            <img
              src="/asset/images/Icon/Footer/facebook.svg"
              onClick={() => window.open(url.sns.facebook)}
              onKeyUp={() => window.open(url.sns.blog)}
              alt="facebook"
            />
            <img
              src="/asset/images/Icon/Footer/linkedin.svg"
              onClick={() => window.open(url.sns.linkedin)}
              onKeyUp={() => window.open(url.sns.blog)}
              alt="linkedin"
            />
            <img
              src="/asset/images/Icon/Footer/youtube.svg"
              onClick={() => window.open(url.sns.youtube)}
              onKeyUp={() => window.open(url.sns.blog)}
              alt="youtube"
            />
          </FooterSns>
          <FooterDropdown>
            <SelectDropdown
              onClick={() => setOnSelectLang(!onSelectLang)}
              ref={langDropdownRef}
              isLang={true}
            >
              <SelectInput
                placeholder={nowLang}
                isactive={onSelectLang}
                readOnly
                isLang={true}
              />
              {onSelectLang ? (
                <DropDown text={DropDownLangText} onClick={onClickLang} />
              ) : (
                <></>
              )}
            </SelectDropdown>
            <SelectDropdown
              onClick={() => setOnSelectSite(!onSelectSite)}
              ref={siteDropdownRef}
              isLang={false}
            >
              <SelectInput
                placeholder="Familt Site +"
                isactive={onSelectSite}
                readOnly
                isLang={false}
              />
              {onSelectSite ? (
                <DropDown text={DropDownSiteText} onClick={onClickLink} />
              ) : (
                <></>
              )}
            </SelectDropdown>
          </FooterDropdown>
        </FooterToolBox>
      </FooterDescriptionWrapper>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;
const FnbWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 384px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #23252b;
`;
const FooterDescriptionWrapper = styled.div`
  height: 100%;
  min-height: 239px;
  padding: 20px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 36px;
`;
const FooterDescription = styled.div`
  width: 100%;
  max-width: 792px;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 19px;
  letter-spacing: -0.07em;
  span {
    opacity: 0.5;
  }
`;
const FooterToolBox = styled.div`
  width: 100%;
  max-width: 792px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
`;
const FooterSns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 15px;
  img {
    cursor: pointer;
  }
`;
const FooterDropdown = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const SelectDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  letter-spacing: 0;
  position: relative;
  ${(props) =>
    props.isLang
      ? css`
          width: 90px;
        `
      : css`
          width: 114px;
        `}
`;

const SelectInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 1.4rem;
  color: #ffffff;
  cursor: default;
  border: none;
  border-radius: 4px;
  /* ${(props) =>
    props.isactive
      ? css`
          background-image: url("/asset/images/Icon/arrow_bottom_1.svg");
        `
      : css`
          background-image: url("/asset/images/Icon/arrow_bottom_1.svg");
        `} */

  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 178px 12px;
  ${(props) =>
    props.isLang
      ? css`
          padding-left: 20px;
        `
      : css`
          padding-left: 10px;
        `}
  :focus-visible {
    outline: none;
  }
  ::placeholder {
    color: #ffffff;
  }
`;
