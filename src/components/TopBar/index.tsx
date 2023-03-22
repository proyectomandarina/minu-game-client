import { ReactElement } from "react";
import styled from "styled-components";

interface TopBarProps {
  count: number;
}

const TopBarContainer = styled.div<TopBarProps>`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: ${(props) =>
    props.count === 1 ? "flex-end" : "space-between"};
`;

export default function TopBar({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const childrenCount = Array.isArray(children) ? children.length : 1;

  return <TopBarContainer count={childrenCount}>{children}</TopBarContainer>;
}
