import { CSSProperties, ReactNode } from "react";
type gridLayoutProps = {
  columnNumber: number;
  component: ReactNode;
};

const GridLayOut = (Props: gridLayoutProps) => {
  const gridLayOutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat${Props.columnNumber}.1fr`,
    gap: "30px",
  };
  return <section style={gridLayOutStyle}>{Props.component}</section>;
};

export default GridLayOut;
