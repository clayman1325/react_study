import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = props => {
  const [amountIsValid, setAumountIsValid] = useState(true);
  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("testttt", amountInputRef);
    const enteredAmount = amountInputRef.current.value;
    const enteredAMountNumber = +enteredAmount;
    console.log("testttt");
    if(
      enteredAmount.trim().length ==0 || 
      enteredAMountNumber < 1 ||
      enteredAMountNumber > 5) {
        setAumountIsValid(false);
        return;
      }

      props.onAddToCart(enteredAMountNumber);
  }

  return (
    <form className= {classes.form} onSubmit={submitHandler}>
      <Input 
        label="Amount"
        ref={amountInputRef}
        input={
        {
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }
      } />
      <button> +Add </button>
      { !setAumountIsValid && <p> Enter a valid amount (1-5). </p>}
    </form>
  )
}

export default MealItemForm;