import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const numofItemsinCart = CartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <>
      <button className={styles.button} onClick={props.onCartButtonClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{numofItemsinCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
