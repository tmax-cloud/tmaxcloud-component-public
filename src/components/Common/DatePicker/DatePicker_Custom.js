import { ConfigProvider, DatePicker, Space } from "antd";
import React, { forwardRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

import "moment/locale/ko";
import locale from "antd/lib/locale/ko_KR";

const DatePicker_CustomWrapper = styled.div``;

const DataPicker_CustomStyle = styled(DatePicker)`
  height: 3.2rem;
  ${({ theme }) => theme.font.body2_400};
  cursor: pointer;
  background: ${({ theme }) => theme.color.white._100};
  border: 1px solid ${({ theme }) => theme.color.gray._300};
  border-radius: 8px;
  box-shadow: none;
  padding: 0 0.4rem 0 1.1rem;
  :hover {
    border: 1px solid ${({ theme }) => theme.color.gray._500};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.color.gray._900};
  }
`;
const CustomPickerGlobalStyle = createGlobalStyle`
.ant-picker-panel-container{
  padding:0 2rem 2rem 2rem;
  box-shadow: 0px 0px 16px 2px rgba(37, 50, 113, 0.12);
  border-radius: 16px;

}


`;
const DatePicker_Custom = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const dotFormat = (value) => value.format("YYYY.MM.DD");

  return (
    <DatePicker_CustomWrapper>
      <CustomPickerGlobalStyle />
      <ConfigProvider locale={locale}>
        <DataPicker_CustomStyle
          onChange={onChange}
          format={dotFormat}
          allowClear={false}
          showToday={false}
          showNow={false}
        />
      </ConfigProvider>
    </DatePicker_CustomWrapper>
  );
};

export default DatePicker_Custom;
