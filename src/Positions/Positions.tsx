import { CSSProperties } from "react";
export type positionsProps = {
  position: string;
};

const Positions = (props: positionsProps) => {
  const positionStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    maxWidth: "100%",
    objectFit: "cover",
    border: "0px",
  };

  return (
    <img
      style={positionStyle}
      src="https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925"
      alt=""
    />
  );
};
export default Positions;
