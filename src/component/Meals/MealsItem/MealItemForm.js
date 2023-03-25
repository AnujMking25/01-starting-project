import { useRef, useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountISValid, setamountISValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(amountInputRef);
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      return setamountISValid(false);
    }
    props.onAddToCart(enterdAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button />
      {!amountISValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
export default MealItemForm;
