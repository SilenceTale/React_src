import { useState } from "react";

const Up = () => {
  const [num, setnum] = useState(0);

  const number = () => {
    setnum((prev) => {
      return prev + 1;
    });
  };

  return <button onClick={number}>{num}</button>;
};
export default Up;
