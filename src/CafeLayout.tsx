type coffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};

const Coffee = (props: coffeeProps) => {
  return (
    <span onClick={props.click}>
      {props.coffeeName}: {props.coffeeAmount}
    </span>
  );
};
export default Coffee;
