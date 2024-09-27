import { CSSProperties } from "react";

export type rankingProps = {
  ranking: number;
};

const Ranking = (props: rankingProps) => {
  const rankingStyle: CSSProperties = {
    color: "#9aa4af",
    fontSize: "12px",
    gap: "20px",
  };

  return <span style={rankingStyle}>{props.ranking}</span>;
};
export default Ranking;
