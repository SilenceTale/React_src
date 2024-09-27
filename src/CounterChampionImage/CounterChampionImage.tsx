import { CSSProperties } from "react";

export type counterChampionImageProps = {
  counter: string;
};

const CounterChampionImage = (props: counterChampionImageProps) => {
  const counterChampionImageStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    borderRadius: "9999px",
    verticalAlign: "middle",
    maxWidth: "100%",
  };

  return <img style={counterChampionImageStyle} src="" alt="" />;
};
export default CounterChampionImage;
