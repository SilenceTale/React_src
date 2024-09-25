import { CSSProperties } from "react";
type propsType = {
  width: string;
  height: string;
  backgroundColor: "red" | "blue" | "orange" | "green";
  text: string;
};

const Box = (props: propsType) => {
  const boxColor: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={boxColor}>{props.text}</div>;
};
export default Box;
