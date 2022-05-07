import React from "react";
import styles from "./MealsData.module.css";
import Card from "../UI/Card";
import MealDataComponent from "./MealDataComponent/MealDataComponent";

const MealsData = () => {
  const DUMMY_MealsData = [
    {
      id: "m1",
      name: "Tuna Sushi",
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
  const mealList = DUMMY_MealsData.map((meal) => (
    <MealDataComponent
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsData;
