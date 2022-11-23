import styled from "styled-components";
import { ReactComponent as doubleLeftIcon } from "Icon/arrow/double_arrow/left.svg";
import { ReactComponent as leftIcon } from "Icon/arrow/arrow/left/Medium.svg";
import { ReactComponent as doubleRightIcon } from "Icon/arrow/double_arrow/right.svg";
import { ReactComponent as rightIcon } from "Icon/arrow/arrow/right/Medium.svg";

type PaginationPropsType = {
  /** 타입 (Combination은 미지원)*/
  state: "Input" | "Table" | "Combination";
  /** 현재 페이지. 스토리북에서는 nowPage를 조절하는것으로 숫자 변경 가능 */
  nowPage: number;
  /** 한번에 보여줄 테이블의 갯수(Type = table 전용) */
  unit?: number;
  /** 총 페이지 수 */
  allPage: number;
  /** 페이지 이동 함수 */
  handlePage: () => void;
  /** 이전 페이지 이동 함수 */
  handlePrev: () => void;
  /** 다음 페이지 이동 함수 */
  handleNext: () => void;
  /** 가장 처음 페이지 이동 함수 */
  handlePrevEnd: () => void;
  /** 가장 끝 페이지 이동 함수 */
  handleNextEnd: () => void;
};

const Wrapper = styled.div`
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
  button {
    width: 2.4rem;
    height: 2.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.4rem;
    :hover {
      background-color: ${({ theme }) => theme.color.black._4};
    }
    :focus {
      background-color: ${({ theme }) => theme.color.black._10};
    }
  }
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  span {
    ${({ theme }) => theme.font.body3_400};
    color: ${({ theme }) => theme.color.gray._700};
  }
  input {
    width: 4.4rem;
    height: 3.2rem;
    padding: 0.6rem 1.35rem;
    text-align: center;
    ${({ theme }) => theme.font.body3_400};
    color: ${({ theme }) => theme.color.gray._900};
    border: 0.1rem solid ${({ theme }) => theme.color.gray._300};
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white._100};

    :hover {
      border: 1px solid ${({ theme }) => theme.color.gray._500};
      border-radius: 8px;
    }
    :focus-visible {
      border: 0.1rem solid ${({ theme }) => theme.color.gray._900};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
const DoubleLeftIcon = styled(doubleLeftIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.gray._500};
`;
const LeftIcon = styled(leftIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.gray._500};
`;
const DoubleRightIcon = styled(doubleRightIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.gray._500};
`;
const RightIcon = styled(rightIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.gray._500};
`;
const InputPagination = ({
  nowPage,
  allPage,
  handlePage,
  handlePrev,
  handleNext,
  handlePrevEnd,
  handleNextEnd,
}: PaginationPropsType) => {
  return (
    <Wrapper>
      <button onClick={handlePrevEnd}>
        <DoubleLeftIcon />
      </button>
      <button onClick={handlePrev}>
        <LeftIcon />
      </button>
      <PageWrapper>
        <span>
          <input
            type="number"
            value={nowPage}
            max={allPage}
            min="1"
            onChange={handlePage}
          />
        </span>
        <span>of</span>
        <span>{allPage}</span>
      </PageWrapper>
      <button onClick={handleNext}>
        <RightIcon />
      </button>
      <button onClick={handleNextEnd}>
        <DoubleRightIcon />
      </button>
    </Wrapper>
  );
};

const TablePagination = ({
  nowPage,
  unit,
  allPage,
  handlePage,
  handlePrev,
  handleNext,
}: PaginationPropsType) => {
  return (
    <Wrapper>
      <PageWrapper>
        <span>
          {nowPage} - {unit + nowPage - 1}
        </span>
        <span>of</span>
        <span>{allPage}</span>
        <button onClick={handlePrev}>
          <LeftIcon />
        </button>
        <button onClick={handleNext}>
          <RightIcon />
        </button>
      </PageWrapper>
    </Wrapper>
  );
};
/** 개선 필요 */
const Pagination = (props: PaginationPropsType) => {
  if (props.state === "Input") return <InputPagination {...props} />;
  else if (props.state === "Table") return <TablePagination {...props} />;
  else if (props.state === "Combination") return <div />;
  else <div />;
};

Pagination.defaultProps = {
  state: "Input",
  nowPage: 1,
  unit: 5,
  allPage: 10,
  handlePage: (e) => console.log(e.target.value),
  handlePrev: () => console.log("prev button"),
  handleNext: () => console.log("next button"),
  handlePrevEnd: () => console.log("prev end button"),
  handleNextEnd: () => console.log("next end button"),
};

export default Pagination;
