import * as React from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";

const Breadcrumb_CustomStyle = styled(Breadcrumb)`
  ol {
    display: inline-flex;
    flex-direction: row;
    column-gap: 8px;
  }
  li {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    :hover {
      .ant-breadcrumb-link {
        color: blue;
      }
    }
  }

  li:last-child .ant-breadcrumb-separator {
    display: none;
  }
`;

export function Breadcrumb_Custom() {
  const sample = [
    {
      icon: "asdf",
      key: "1",
      label: <a href="/">test1</a>,
    },
    { icon: "", key: "2", label: <a href="/">test2</a> },
    { icon: "", key: "3", label: <a href="/">test3</a> },
  ];

  return (
    <Breadcrumb_CustomStyle separator={<img src="" alt="빵" />}>
      {sample.map((el, index) => (
        <>
          <Breadcrumb.Item key={el.key}>
            {el.icon && <img src={el.icon} alt="아이콘이미지" />}
            {el.label}
          </Breadcrumb.Item>
        </>
      ))}
    </Breadcrumb_CustomStyle>
  );
}
