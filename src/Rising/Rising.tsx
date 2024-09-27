import { CSSProperties } from "react";

export type risingProps = {
  rising: number;
};

const Rising = (props: risingProps) => {
  const risingStyle: CSSProperties = {
    fontSize: "12px",
    color: "#139020",
    gap: "5px",
  };

  return <span style={risingStyle}>{props.rising}</span>;
};
export default Rising;
