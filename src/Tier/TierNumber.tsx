import { CSSProperties } from "react";
export type tierNumberProps = {
  tier: string;
};

const TierNumber = (props: tierNumberProps) => {
  const tierNumberStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    maxWidth: "100%",
    objectFit: "cover",
    border: "0px",
  };
  return (
    <img
      style={tierNumberStyle}
      src="https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925"
      alt=""
    />
  );
};
export default TierNumber;
