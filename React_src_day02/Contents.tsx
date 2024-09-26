import { CSSProperties } from "react";
const Contents = () => {
  const ContentsStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  return <section style={ContentsStyle}></section>;
};
export default Contents;
