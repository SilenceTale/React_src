import { CSSProperties } from "react";

export type banrateProps = {
  banrate: string;
};
const BanRate = (props: banrateProps) => {
  const banrateStyle: CSSProperties = {
    color: "#57646F",
    height: "40px",
    fontSize: "12px",
    padding: "4px",
    lineHeight: "16px",
  };

  return <span style={banrateStyle}>{props.banrate}</span>;
};
export default BanRate;
