import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
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

const DefaultPagination = ({
  nowPage,
  allPage,
  handlePage,
  handlePrev,
  handleNext,
  handlePrevEnd,
  handleNextEnd,
}) => {
  return (
    <Wrapper>
      <button onClick={handlePrevEnd}>
        <img src="/asset/images/Icon/dummy_icon.svg" alt="prev_end" />
      </button>
      <button onClick={handlePrev}>
        <img src="/asset/images/Icon/dummy_icon.svg" alt="prev" />
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
        <img src="/asset/images/Icon/dummy_icon.svg" alt="next" />
      </button>
      <button onClick={handleNextEnd}>
        <img src="/asset/images/Icon/dummy_icon.svg" alt="next_end" />
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
}) => {
  return (
    <Wrapper>
      <PageWrapper>
        <span>
          {nowPage} - {unit + nowPage - 1}
        </span>
        <span>of</span>
        <span>{allPage}</span>
        <button onClick={handlePrev}>
          <img src="/asset/images/Icon/dummy_icon.svg" alt="prev" />
        </button>
        <button onClick={handleNext}>
          <img src="/asset/images/Icon/dummy_icon.svg" alt="next" />
        </button>
      </PageWrapper>
    </Wrapper>
  );
};

const Pagination = (props) => {
  if (props.state === "Default") return <DefaultPagination {...props} />;
  else if (props.state === "Table") return <TablePagination {...props} />;
  else return <div {...props} />;
};

Pagination.propTypes = {
  /** 타입 */
  state: PropTypes.oneOf(["Default", "Table", "Combination"]),
  /** 현재 페이지. 스토리북에서는 nowPage를 조절하는것으로 숫자 변경 가능 */
  nowPage: PropTypes.number,
  /** Table에서 사용할 단위. 한번에 보여줄 테이블의 갯 수 */
  unit: PropTypes.number,
  /** 총 페이지 수 */
  allPage: PropTypes.number,
  /** 페이지 이동 함수 */
  handlePage: PropTypes.func,
  /** 이전 페이지 이동 함수 */
  handlePrev: PropTypes.func,
  /** 다음 페이지 이동 함수 */
  handleNext: PropTypes.func,
  /** 가장 처음 페이지 이동 함수 */
  handlePrevEnd: PropTypes.func,
  /** 가장 끝 페이지 이동 함수 */
  handleNextEnd: PropTypes.func,
};

Pagination.defaultProps = {
  state: "Default",
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