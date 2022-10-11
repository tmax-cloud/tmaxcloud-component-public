import styled, { css } from "styled-components";

type ButtonPropsType = {
  state:
    | "PrimaryA"
    | "PrimaryB"
    | "SecondaryA"
    | "SecondaryB"
    | "SecondaryC"
    | "TertiaryA"
    | "TertiaryB";
  /** 크기 */
  propSize: "XL" | "L" | "M" | "S";
  /** 텍스트 */
  text: string;
  /**클릭 이벤트 */
  onClick: () => void;
};

const Button_Custom = styled.button`
  width: 100%;
  padding: 0 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme, propSize }) => {
    if (propSize === "XL")
      return css`
        height: 4.4rem;
        border-radius: 0.8rem;
        ${theme.font.body1_400};
      `;
    else if (propSize === "L")
      return css`
        height: 3.6rem;
        border-radius: 0.8rem;
        ${theme.font.body1_400};
      `;
    else if (propSize === "M")
      return css`
        height: 3.2rem;
        border-radius: 0.6rem;
        ${theme.font.body3_400};
      `;
    else
      return css`
        height: 2.8rem;
        border-radius: 0.6rem;
        ${theme.font.body1_400};
        padding: 0 1.2rem;
      `;
  }}
  ${({ theme, state }) => {
    if (state === "PrimaryA")
      return css`
        color: ${theme.color.white._100};
        background-color: ${theme.color.marine._500};
        :hover {
          background-color: ${theme.color.marine._400};
        }
        :focus {
          background-color: ${theme.color.marine._700};
        }
      `;
    else if (state === "PrimaryB")
      return css`
        color: ${theme.color.white._100};
        background-color: ${theme.color.blueGray._900};
        :hover {
          background-color: ${theme.color.blueGray._700};
        }
        :focus {
          background-color: ${theme.color.black._100};
        }
      `;
    else if (state === "SecondaryA")
      return css`
        color: ${theme.color.marine._500};
        background-color: ${theme.color.white._100};
        border: 1px solid ${theme.color.marine._500};
        :hover {
          background-color: ${theme.color.gray._50};
        }
        :focus {
          background-color: ${theme.color.gray._50};
          border: 1px solid ${theme.color.gray._900};
        }
      `;
    else if (state === "SecondaryB")
      return css`
        color: ${theme.color.gray._900};
        background-color: ${theme.color.white._100};
        border: 1px solid ${theme.color.gray._800};
        :hover {
          background-color: ${theme.color.gray._50};
        }
        :focus {
          background-color: ${theme.color.gray._100};
          border: 1px solid ${theme.color.gray._900};
        }
      `;
    else if (state === "SecondaryC")
      return css`
        color: ${theme.color.gray._900};
        background-color: ${theme.color.white._100};
        border: 1px solid ${theme.color.gray._400};
        :hover {
          background-color: ${theme.color.gray._50};
        }
        :focus {
          background-color: ${theme.color.gray._100};
        }
      `;
    else if (state === "TertiaryA")
      return css`
        color: ${theme.color.blueGray._600};
        background-color: ${theme.color.blueGray._100};
        :hover {
          background-color: ${theme.color.blueGray._150};
        }
        :focus {
          background-color: ${theme.color.blueGray._200};
        }
      `;
    else if (state === "TertiaryB")
      return css`
        color: ${theme.color.marine._500};
        background-color: ${theme.color.marine._100};
        :hover {
          background-color: ${theme.color.marine._200};
        }
        :focus {
          background-color: ${theme.color.marine._300};
        }
      `;
  }}
  ${({ theme }) => css`
    :disabled {
      background-color: ${theme.color.gray._300};
      color: ${theme.color.gray._500};
    }
  `}
`;

const Button = (props) => {
  console.log(props);

  return <Button_Custom {...props}>{props.text}</Button_Custom>;
};

Button.defaultProps = {
  state: "PrimaryA",
  propSize: "XL",
  text: "test",
  onClick: () => console.log("button Click"),
};

export default Button;
