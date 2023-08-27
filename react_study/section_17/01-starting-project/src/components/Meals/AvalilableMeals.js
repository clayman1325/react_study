import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";

const DBurl = "someDBurl"
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = props => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState
  // Use effect can not be async

  useEffect(() => {
    setIsLoading(false)
    // const fetchMeals = async () => {
    //   let data = await fetch(DBurl);
    //   if(!response.ok) {
        //   setHttpError(true);
          throw Error("Something went wrong")
        //  }
    //   data     = data.json();

    //   const loadMeals = [];
    //   for(key in data) {
    //     loadMeals.push({
    //       id: key,
    //       name: data[key].name,
    //       description: data[key].description,
    //       price: data[key].price
    //     })
    //   }
    //   setMeals(loadMeals)
    //   setIsLoading(false)
    // }
    // fetchMeals().catch((error) => {
      // setHttpError(true);
      // setIsLoading)false)
    // });
  },[])

  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem 
        key={meal.key}
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price} 
      />
    )
  })
  const HttpError = (
    <section>
      <p> Error: Please refresh the page  </p>
    </section>
  )
  const LoadingState = (
    <section>
      <p> Is Loading meails </p>
    </section>
  )
  return (
    <section className= {classes.meals}>
      <ul>
        <Card>
          { isLoading && LoadingState }
          { !isLoading &&  mealsList }
        </Card>
      </ul>
    </section>
  )
}

export default AvailableMeals;