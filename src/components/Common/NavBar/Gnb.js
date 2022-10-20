import styled from "styled-components";
import { Lnb } from "../../";
import MenuList from "../../utils/menuList";
/**보류 */
export default function Gnb({ setTitle, title }) {
  return (
    <>
      {MenuList.map((data) => (
        <Wrapper
          onMouseOver={() => setTitle(data.title)}
          onMouseOut={() => setTitle("")}
          key={data.title}
        >
          {data.link ? (
            <GnbTitle>
              <a href={data.link}>{data.title}</a>
            </GnbTitle>
          ) : (
            <GnbTitle>{data.title}</GnbTitle>
          )}
          {data.children ? (
            <LnbWrapper active={title === data.title}>
              <Lnb child={data.children} />
            </LnbWrapper>
          ) : (
            ""
          )}
        </Wrapper>
      ))}
    </>
  );
}
const Wrapper = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const GnbTitle = styled.div``;
const LnbWrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.active ? "display" : "none")};
  position: absolute;
  background-color: #97979790;
  z-index: 10;
  left: 0;
  top: 49px;
`;
