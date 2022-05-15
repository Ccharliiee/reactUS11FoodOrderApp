import styles from "./MealDataComponent.module.css";
import MealDataForm from "./MealDataForm";

const MealDataComponent = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealDataForm id={props.id} />
      </div>
    </li>
  );
};

export default MealDataComponent;
