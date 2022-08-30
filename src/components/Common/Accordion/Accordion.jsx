import PropTypes from "prop-types";
import { Accordion_Box, Accordion_List, Accordion_Row } from "./";

const Accordion = (props) => {
  if (props.state === "Box") return <Accordion_Box {...props} />;
  else if (props.state === "List") return <Accordion_List {...props} />;
  else return <Accordion_Row {...props} />;
};
Accordion.propTypes = {
  /** 아코디언 타입 */
  state: PropTypes.oneOf(["Box", "List", "Row"]),
  /** 아코디언 카테고리(state가 List인 경우 활성 사용 가능) */
  category: PropTypes.string,
  /** 아코디언의 제목  */
  title: PropTypes.string,
  /** 아코디언의 내용 */
  content: PropTypes.string,
  /** 이용불가능 여부 */
  disabled: PropTypes.bool,
};
Accordion.defaultProps = {
  state: "Box",
  category: "카테고리",
  title: "타이틀",
  content: "내용물",
  disabled: false,
};

export default Accordion;
