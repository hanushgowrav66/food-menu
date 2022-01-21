import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Biryani",
    description: "Finest veggies",
    price: 150,
  },
  {
    id: "m2",
    name: "Ghee Rice",
    description: "A homemade ghee specialty!",
    price: 120,
  },
  {
    id: "m3",
    name: "Veg Burger",
    description: "American, Indian, Raw, Helathy!",
    price: 135,
  },
  {
    id: "m4",
    name: "Momo's",
    description: "Mama..Mimi...MOMO!",
    price: 60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
