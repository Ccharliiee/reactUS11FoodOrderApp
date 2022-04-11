import React from "react";
import mealsimg from "../../assets/meals.jpg";
import mealsimg2 from "../../assets/meals2.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>first meal</h1>
        <button>cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsimg} alt="table of meal" />
        <img src={mealsimg2} alt="table of meal2" />
      </div>
    </>
  );
};

export default Header;
