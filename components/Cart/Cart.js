import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "Tuna Sushi", amount: 2, price: 22.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartitems}
      <div className={styles["total"]}>
        <span>total amount</span>
        <span>45.98</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          close
        </button>
        <button className={styles["button"]}>place order</button>
      </div>
    </Modal>
  );
};

export default Cart;
