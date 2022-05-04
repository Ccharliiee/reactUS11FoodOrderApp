import React from "react";
import styles from "./MealsData.module.css";

const MealsData = () => {
  const DUMMY_MealsData = [
    {
      id: "m1",
      name: "TunaSushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Breaded Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "BBQ Beef Burger",
      description: "American, raw, meaty",
      price: 15.99,
    },
    {
      id: "m4",
      name: "Green Mix Bowl",
      description: "Mix of green",
      price: 18.99,
    },
  ];
  const mealList = DUMMY_MealsData.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default MealsData;
