import styled from "styled-components";

export default function DropDown(props) {
  return (
    <OptionCategoryWrapper>
      {props.text.option.map((option) => (
        <label key={option.label}>
          <OptionCategory
            value={option.value}
            onClick={props.onClick}
            readOnly
          />
        </label>
      ))}
    </OptionCategoryWrapper>
  );
}

const OptionCategoryWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 8px 0;
  border-radius: 8px;
  position: absolute;
  left: -1px;
  bottom: 45px;
  z-index: 2;
  display: inline-block;
`;
const OptionCategory = styled.input`
  width: 100%;
  display: block;
  padding: 8px 0 8px 20px;
  font-size: 1.3rem;
  color: #4c4c4c;
  letter-spacing: 0;
  border: none;
  :hover {
    background: #f8f8f8;
    cursor: default;
  }
  :focus {
    background: #f3f3f3;
    color: #000000;
  }
  :focus-visible {
    outline: none;
  }
`;
