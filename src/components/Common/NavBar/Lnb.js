import Link from "next/link";
import styled from "styled-components";

/**보류 */
export default function Lnb({ child }) {
  return (
    <Wrapper>
      {child.map((children) => (
        <div key={children.title}>
          <a href={children.link}>{children.title}</a>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;
