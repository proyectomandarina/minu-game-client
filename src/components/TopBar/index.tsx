import { ReactElement } from "react";
import styled from "styled-components";

type position = "flex-start" | "flex-end";

interface TopBarProps {
  count: number;
  position?: position;
}

const TopBarContainer = styled.div<TopBarProps>`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: ${(props) =>
    props.count === 1 && props.position ? props.position : "space-between"};
`;

export default function TopBar({
  children,
  position,
}: {
  children: ReactElement | ReactElement[]| null;
  position?: position;
}) {
  const childrenCount = Array.isArray(children) ? children.length : 1;

  return (
    <TopBarContainer count={childrenCount} position={position}>
      {children}
    </TopBarContainer>
  );
}
