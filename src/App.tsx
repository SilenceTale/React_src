import { useState } from "react";
import AblyOption from "./Ably/AblyOption";
import Button from "./Button";
import Counter from "./Counter";
import Test from "./Test";
import Cafe from "./Cafe";

function App() {
  // const [total, setTotal] = useState(2);

  return (
    <div>
      <Cafe />
      {/* <AblyOption name={"31"} price={31890} />;
      <AblyOption name={"27"} price={31890} />;<div>총 갯수: {total}</div> */}
    </div>
  );
}

export default App;
