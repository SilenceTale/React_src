import React from "react";
import { CSSProperties } from "react";

type ButtonProps = {
  backgroundColor: "Primary" | "Hover" | "Deactive";
  borderRadius: "Hard" | "Smooth" | "Circle";
};

const Button = (props: ButtonProps) => {
  const backgroundColorMap = {
    Primary: "#205bf3",
    Hover: "#478df5",
    Deactive: "#979797",
  };
  const borderRadiusMap = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "24px",
  };
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroundColorMap[props.backgroundColor],
    borderRadius: borderRadiusMap[props.borderRadius],
    padding: "10px 40px",
    color: "white",
    fontSize: "32px",
    border: "none",
  };

  return <button style={buttonStyle}>Button</button>;
};
export default Button;
