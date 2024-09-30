import { useState } from "react";
import Fruit from "./Fruit";

const Test = () => {
  const [fruits, setFruits] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1000 },
    orange: { amount: 0, price: 1000 },
  });

  const changeApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: { amount: prev.apple.amount + 1, price: 1000 } };
    });
  };
  const changeBanana = () => {
    setFruits((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 1, price: 1500 },
      };
    });
  };
  const changeOrange = () => {
    setFruits((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div>
      <Fruit
        click={changeApple}
        fruitName={"사과임"}
        fruitAmount={fruits.apple.amount}
      />
      <Fruit
        click={changeBanana}
        fruitName={"바나나임"}
        fruitAmount={fruits.banana.amount}
      />
      <Fruit
        click={changeOrange}
        fruitName={"오렌지임"}
        fruitAmount={fruits.orange.amount}
      />
      <span>
        총 갯수{" "}
        {fruits.apple.amount + fruits.banana.amount + fruits.orange.amount}
      </span>
      <span>
        총 가격 {""}
        {fruits.apple.amount * fruits.apple.price +
          fruits.banana.amount * fruits.banana.price +
          fruits.orange.amount * fruits.orange.price}
      </span>
    </div>
  );
};
export default Test;
