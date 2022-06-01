import { useRef, useState } from "react";
import styles from "./MealDataForm.module.css";
import Input from "../../UI/Input";

const MealDataForm = (props) => {
  const inputAmountRef = useRef();
  const [inputNumValid, setInputNumValid] = useState(true);
  const addSingleMealHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 10
    ) {
      setInputNumValid(false);
      return;
    }
    props.onadd2Cart(enteredAmountNum);
  };
  return (
    <form className={styles.form} onSubmit={addSingleMealHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!inputNumValid && <p>Please enter a valid amount. Max:10</p>}
    </form>
  );
};

export default MealDataForm;
