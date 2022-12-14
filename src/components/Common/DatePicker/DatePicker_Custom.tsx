import { ConfigProvider, Space, DatePicker } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import "moment/locale/ko";
import locale from "antd/lib/locale/ko_KR";

type DatePicker_CustomPropsType = {
  /** 타입 */
  state: "Default" | "Yearly" | "Monthly";
};

const DatePicker_CustomWrapper = styled.div``;
const DatePicker_CustomStyle = styled(DatePicker)`
  height: 3.2rem;
  ${({ theme }) => theme.font.body2_400};
  cursor: pointer;
  background: ${({ theme }) => theme.color.white._100};
  border: 1px solid ${({ theme }) => theme.color.gray._300};
  border-radius: 8px;
  box-shadow: none;
  padding: 0 0.4rem 0 1.1rem;
  border-radius: 0.8rem;
  :hover {
    background: ${({ theme }) => theme.color.gray._100};
    border: 0.1rem solid ${({ theme }) => theme.color.gray._500};
    input::placeholder {
      color: ${({ theme }) => theme.color.gray._900};
    }
  }

  &.ant-picker-focused {
    border: 1px solid ${({ theme }) => theme.color.gray._900};
    .ant-picker-suffix {
      background: rgba(0, 0, 0, 0.04);
      border-radius: 50%;
    }
    input::placeholder {
      color: ${({ theme }) => theme.color.gray._900};
    }
  }
`;
const CustomPickerGlobalStyle = createGlobalStyle`
 
  .ant-picker-date-panel,.ant-picker-year-panel,.ant-picker-month-panel{
    height:29rem;
    overflow-y: scroll;
  }
  .ant-picker-suffix {
    width: 2.8rem;
    height: 2.8rem;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    :hover{
      background: rgba(0, 0, 0, 0.04);
      border-radius: 50%;
    }
  }  
  .ant-picker-panel-container {
    box-shadow: 0px 0px 16px 2px rgba(37, 50, 113, 0.12);
    border-radius: 1.2rem;
  }
  .ant-picker-date-panel .ant-picker-body{
    padding: .5rem 1.6rem 1.6rem 1.6rem;
  }
  .ant-picker-content{
    ${({ theme }) => theme.font.body4_400};
  }
  .ant-picker-cell{
    color: ${({ theme }) => theme.color.gray._900};
  }
  .ant-picker-cell-inner:focus{
    background-color: ${({ theme }) => theme.color.blueGray._900};
    color: ${({ theme }) => theme.color.white._100};
    border-radius: 100px;
  }
  .ant-picker-cell .ant-picker-cell-inner {
    border-radius: 100px;
  }
  .ant-picker-cell-today .ant-picker-cell-inner{
    color: ${({ theme }) => theme.color.gray._900};
  }
  .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner, .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner{
    background-color:${({ theme }) => theme.color.blueGray._100};
  }
  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
    border:1px solid ${({ theme }) => theme.color.gray._900};
    border-radius: 100px;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background-color: ${({ theme }) => theme.color.blueGray._900};
  color:${({ theme }) => theme.color.white._100};    
  border-radius: 100px;
  }.ant-picker-date-panel .ant-picker-content .ant-picker-cell:not(.ant-picker-cell-in-view){
    opacity: 0.3;
  }
  .ant-picker-date-panel .ant-picker-content .ant-picker-cell:first-child ,.ant-picker-content th:first-child  {
    color: ${({ theme }) => theme.color.error._100};
    .ant-picker-cell-today .ant-picker-cell-inner{
      color: ${({ theme }) => theme.color.error._100};
    }
  }
/* 상단 버튼 */
.ant-picker-header{
   align-items: center;
   border-bottom: none;
   padding:1.6rem 3rem .5rem 3rem;
   height:4.7rem;
   justify-content: space-between;
  .ant-picker-header-prev-btn,.ant-picker-header-super-prev-btn,.ant-picker-header-next-btn,.ant-picker-header-super-next-btn{
      width: 2.4rem;
      height:2.4rem;
      border-radius: 100px;
      display:flex;
      align-items: center;
      justify-content: center;
      transition: none;
      color:${({ theme }) => theme.color.gray._700};
      &:hover{
        color:${({ theme }) => theme.color.gray._700};
        background-color: ${({ theme }) => theme.color.black._4};
      }
  }
}
.ant-picker-year-panel .ant-picker-content,.ant-picker-month-panel .ant-picker-content,.ant-picker-decade-panel .ant-picker-content {
height:24.3rem;
}
.ant-picker-header-view{
  flex:none;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: inherit;
  ${({ theme }) => theme.font.body2_500};
  .ant-picker-year-btn,.ant-picker-month-btn,.ant-picker-decade-btn{
  height:2.6rem;
  color:${({ theme }) => theme.color.gray._900};
  border-radius:4px;
  padding:0.6rem;
  display:inline-flex;
  align-items: center;
  :hover{
    color:${({ theme }) => theme.color.gray._900};
    background-color: ${({ theme }) => theme.color.black._4};;
  }
}
}
.ant-picker-month-panel .ant-picker-year-panel .ant-picker-content {
  height:2.43rem;
}
.ant-picker-super-next-icon{
  width:1.2rem;
  height:1.2rem;
}
`;
const DatePicker_Custom = ({ state }: DatePicker_CustomPropsType) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const DefaultFormat = (value) => value.format("YYYY.MM.DD");
  const MonthFormat = (value) => value.format("YYYY.MM");

  return (
    <DatePicker_CustomWrapper>
      <CustomPickerGlobalStyle />
      <ConfigProvider locale={locale}>
        {
          {
            Yearly: (
              <DatePicker_CustomStyle
                onChange={onChange}
                allowClear={false}
                showToday={false}
                picker="year"
              />
            ),

            Monthly: (
              <DatePicker_CustomStyle
                onChange={onChange}
                format={MonthFormat}
                allowClear={false}
                showToday={false}
                picker="month"
              />
            ),

            Default: (
              <DatePicker_CustomStyle
                onChange={onChange}
                format={DefaultFormat}
                allowClear={false}
                showToday={false}
              />
            ),
          }[state]
        }
      </ConfigProvider>
    </DatePicker_CustomWrapper>
  );
};

DatePicker_Custom.defaultProps = {
  state: "Default",
};

export { DatePicker_Custom };
