import styled from "styled-components";
type RadioMainPropsType = {
  children: React.ReactNode;
};
type RadioLabelPropsType = {
  /** 라디오 버튼의 우측 텍스트 부분 */
  children: React.ReactNode;
  /** Radio value값 */
  value: string;
  /** Radio name 값 */
  name: string;
  /** disabled 여부 */
  isDisabled: boolean;
};
const Label = styled.label`
  height: 2rem;
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  ${({ theme }) => theme.font.body2_400};
`;
const Input = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  &::after {
    content: " ";
    width: 2rem;
    height: 2rem;
    display: inline-block;
    border-radius: 2.5rem;
    border: 0.1rem solid ${({ theme }) => theme.color.blueGray._300};
    background-color: ${({ theme }) => theme.color.white._100};
  }

  &:checked::after {
    background-color: ${({ theme }) => theme.color.marine._500};
    animation: RadioBtnClickGrow 0.3s linear;
    border: none;
  }
  & + span {
    top: 50%;
    left: 50%;
    margin-top: -0.8rem;
    margin-left: -0.8rem;
    position: absolute;
    background-color: ${({ theme }) => theme.color.white._100};
    width: 1.6rem;
    height: 1.6rem;
    content: " ";
    border-radius: 1rem;
    transform: scale(0);
  }
  &:checked + span {
    animation: RadioBtnClickScale 0.3s linear backwards;
    transform: scale(0.5);
  }
  &:disabled::after {
    background-color: ${({ theme }) => theme.color.gray._200};
    border: 0.1rem solid ${({ theme }) => theme.color.gray._400};
  }
  &:checked:disabled::after {
    background-color: ${({ theme }) => theme.color.gray._400};
  }
  &:checked:disabled + span {
    background-color: ${({ theme }) => theme.color.gray._200};
  }
`;
const Span = styled.span`
  position: relative;
  height: 2rem;
`;
const RadioMain = ({ children }: RadioMainPropsType) => {
  return <div>{children}</div>;
};
const RadioLabel = ({
  children,
  value,
  name,
  isDisabled,
}: RadioLabelPropsType) => {
  return (
    <Label>
      <Span>
        <Input type="radio" value={value} name={name} disabled={isDisabled} />
        <span />
      </Span>
      {children}
    </Label>
  );
};
export const Radio = Object.assign(RadioMain, {
  RadioLabel: RadioLabel,
});

export const SBRadio = () => {
  return (
    <div>
      <Radio>
        <Radio.RadioLabel value="1번" name="1번" isDisabled={true}>
          라디오 1번의 1번
        </Radio.RadioLabel>
        <Radio.RadioLabel value="2번" name="1번" isDisabled={false}>
          라디오 1번의 2번
        </Radio.RadioLabel>
        <Radio.RadioLabel value="3번" name="1번" isDisabled={false}>
          라디오 1번의 3번
        </Radio.RadioLabel>
        <br />
        <Radio.RadioLabel value="1번" name="2번" isDisabled={false}>
          라디오 2번의 1번
        </Radio.RadioLabel>
        <Radio.RadioLabel value="2번" name="2번" isDisabled={false}>
          라디오 2번의 2번
        </Radio.RadioLabel>
        <Radio.RadioLabel value="3번" name="2번" isDisabled={false}>
          라디오 2번의 3번
        </Radio.RadioLabel>
      </Radio>
      <Radio>
        <Radio.RadioLabel value="1번" name="3번" isDisabled={false}>
          라디오 3번의 1번
        </Radio.RadioLabel>
        <Radio.RadioLabel value="2번" name="3번" isDisabled={false}>
          라디오 3번의 2번
        </Radio.RadioLabel>
        <Label>
          <Span>
            <Input
              type="radio"
              value="3번"
              name="3번"
              disabled={true}
              checked
            />
            <span />
          </Span>
          라디오 3번의 3번
        </Label>
      </Radio>
    </div>
  );
};
