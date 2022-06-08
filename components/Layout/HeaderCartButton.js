import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;
  const [btnAnime, setbtnAnime] = useState(false);
  const numofItemsinCart = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const btntyles = `${styles.button} ${btnAnime ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnAnime(true);
    const animeTimer = setTimeout(() => {
      setbtnAnime(false);
    }, 300);
    return () => {
      clearTimeout(animeTimer);
    };
  }, [items]);
  return (
    <>
      <button className={btntyles} onClick={props.onCartButtonClick}>
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
