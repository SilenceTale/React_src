import { CSSProperties } from "react";
export type pickrateProps = {
  pickrate: string;
};

const PickRate = (props: pickrateProps) => {
  const pickrateStyle: CSSProperties = {
    color: "#57646F",
    height: "40px",
    fontSize: "12px",
    padding: "4px",
    lineHeight: "16px",
  };

  return <span style={pickrateStyle}>{props.pickrate}</span>;
};
export default PickRate;
