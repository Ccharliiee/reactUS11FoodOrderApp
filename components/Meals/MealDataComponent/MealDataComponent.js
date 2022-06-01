import styles from "./MealDataComponent.module.css";
import { useContext } from "react";
import MealDataForm from "./MealDataForm";
import CartContext from "../../../store/CartContext";

const MealDataComponent = (props) => {
  const cartDataCtx = useContext(CartContext);
  const add2CartHandler = (amount) => {
    cartDataCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealDataForm id={props.id} onadd2Cart={add2CartHandler} />
      </div>
    </li>
  );
};

export default MealDataComponent;
