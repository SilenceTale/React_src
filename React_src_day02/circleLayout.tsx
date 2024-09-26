import { CSSProperties } from "react";
import React from "react";
import Circle from "./circle";

const CcLayout = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(5, 1fr)`,
    gap: "25px",
  };
  return (
    <section style={gridStyle}>
      {["#cd84f1", "#4b4b4b", "#fff200", "#32ff7e", "#18dcff"].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};

export default CcLayout;
