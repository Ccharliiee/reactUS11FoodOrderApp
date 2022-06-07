import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItemComponent from "./CartItemComponent";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const totalPrice = `$${CartCtx.totalPrice.toFixed(2)}`;
  const isCartEmpty = CartCtx.items.length > 0;
  const CartItemAddHandler = (item) => {};
  const CartItemRemoveHandler = (id) => {};
  const cartitems = (
    <ul className={styles["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItemComponent
          item={item}
          onAdd={CartItemAddHandler.bind(null, item)}
          onRemove={CartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartitems}
      <div className={styles["total"]}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          close
        </button>
        {isCartEmpty && (
          <button className={styles["button"]}>place order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
