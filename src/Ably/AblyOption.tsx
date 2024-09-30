import { CSSProperties, useState } from "react";

type AblyOptionProps = {
  name: string;
  price: number;
};

const AblyOption = (props: AblyOptionProps) => {
  const AblyOptionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid grey",
    width: "500px",
    borderRadius: "10px",
  };

  const [num, setNum] = useState(1);

  const plus = () => {
    setNum((prev) => prev + 1);
  };

  const minus = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  return (
    <div style={AblyOptionStyle}>
      <div>
        <button onClick={minus}>-</button>
        <span>{num}</span>
        <button onClick={plus}>+</button>
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.price * num}</span>
      </div>
    </div>
  );
};
export default AblyOption;
