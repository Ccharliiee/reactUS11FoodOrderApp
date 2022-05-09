import styles from "./MealDataForm.module.css";
import Input from "../../UI/Input";

const MealDataForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealDataForm;
