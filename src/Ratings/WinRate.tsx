import { CSSProperties } from "react";

export type winrateProps = {
  winrate: string;
};

const WinRate = (props: winrateProps) => {
  const winrateStyle: CSSProperties = {
    color: "#57646F",
    height: "40px",
    fontSize: "12px",
    padding: "4px",
    lineHeight: "16px",
  };

  return <span style={winrateStyle}>{props.winrate}</span>;
};
export default WinRate;
