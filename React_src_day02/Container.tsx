import { CSSProperties } from "react";
type CenterProps = {
  backgroundColor: "White";
};

const Container = (props: CenterProps) => {
  const CenterStyle: CSSProperties = {
    margin: "0 auto",
    width: "800px",
    height: "1200px",
    borderRadius: "10px",
    boxShadow:
      "box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
  };
  return <div style={CenterStyle}></div>;
};
export default Container;
