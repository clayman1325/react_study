import classes from "./Checkout.module.css"
import { useRef } from "react";

isEmpty = () => value.trim() === "";
fiveChar = () => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidit] = useState({
    name: true,
    street:true,
    postal:true,
    city: true
  });
  const nameRef   = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef   = useRef();

  const onConfirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const street = streetRef.current.value;
    const postal = postalRef.current.value;
    const street = streetRef.current.value;

    //validations and
    // setFormInputsValidit(

    // )

    formIsValid = formInputsValidity.name && 
    formInputsValidity.street && 
    formInputsValidity.postal && 
    formInputsValidity.city

    if(formIsValid) {
      props.onConfirm({
        // const street = streetRef.current.value;
        // const postal = postalRef.current.value;
        // const street = streetRef.current.value;       
      })
    }
  }
  return (
    <form onSubmit={onConfirmHandler}>
      <div className={classes.control}>
        <label htmFor="name"> Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmFor="name"> Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmFor="name"> Postal Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmFor="name"> City</label>
        <input type="text" id="city"></input>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout;