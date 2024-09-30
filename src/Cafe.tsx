import { useState } from "react";
import Coffee from "./CafeLayout";

const Cafe = () => {
  const [cafe, setCafe] = useState({
    americano: { amount: 0, price: 2500 },
    cafelatte: { amount: 0, price: 3500 },
    ade: { amount: 0, price: 4500 },
  });

  const changeAmericano = () => {
    setCafe((prev) => {
      return {
        ...prev,
        americano: { amount: prev.americano.amount + 1, price: 2500 },
      };
    });
  };
  const changecafeLatte = () => {
    setCafe((prev) => {
      return {
        ...prev,
        cafelatte: { amount: prev.cafelatte.amount + 1, price: 3500 },
      };
    });
  };
  const changeAde = () => {
    setCafe((prev) => {
      return {
        ...prev,
        ade: { amount: prev.ade.amount + 1, price: 4500 },
      };
    });
  };

  return (
    <div>
      <Coffee
        click={changeAmericano}
        coffeeName={"아메리카노임"}
        coffeeAmount={cafe.americano.amount}
      />
      <Coffee
        click={changecafeLatte}
        coffeeName={"카페라떼임"}
        coffeeAmount={cafe.cafelatte.amount}
      />
      <Coffee
        click={changeAde}
        coffeeName={"에이드임"}
        coffeeAmount={cafe.ade.amount}
      />
      <span>
        총 갯수{" "}
        {cafe.americano.amount + cafe.cafelatte.amount + cafe.ade.amount}
      </span>
      <span>
        총 가격{" "}
        {cafe.americano.price * cafe.americano.amount +
          cafe.cafelatte.price * cafe.cafelatte.amount +
          cafe.ade.price * cafe.ade.amount}
      </span>
    </div>
  );
};
export default Cafe;
