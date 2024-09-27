import { CSSProperties } from "react";
export type championNameProps = {
  name: string;
};

const ChampionName = (props: championNameProps) => {
  const championNameStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#202D37",
  };

  return <span style={championNameStyle}>{props.name}</span>;
};
export default ChampionName;
