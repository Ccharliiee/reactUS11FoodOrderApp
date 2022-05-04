import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Fresh and Tasty Food, Delivery and Pickup Available</h2>
      <p>
        Order your favorite meal now from our menu of a broad selection of food
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with locally-sourced and high-quality
        ingredients, just-in-time and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
