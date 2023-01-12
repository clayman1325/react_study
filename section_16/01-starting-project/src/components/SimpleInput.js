import { useState, useRef } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const nameInput = useInput((elem) => elem.trim() != 0  );
  const emailInput = useInput((elem) => {
    return elem.trim() != 0 && elem.includes("@");
  });
  const nameIsValid  = nameInput.validInput;
  const emailIsValid = emailInput.validInput;

  const nameHandler = (event) => {
    nameInput.valueHandler(event)
  }
  const emailHandler = (event) => {
    emailInput.valueHandler(event)
  }

  const nameInputCLases = nameIsValid ? "form-control" : "form-control invalid"
  const emailInputCLases = emailIsValid ? "form-control" : "form-control invalid"

  let formIsValid = false;
  if(nameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }
    nameInput.reset()
  }

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputCLases}>
        <label htmlFor='name'>Your Name</label>
        <input className={nameInputCLases} ref={nameRef} type='text' id='name' value={nameInput.value} onChange={nameHandler} />
        { !nameIsValid && <p className="error-text"> please check that the name is correct </p>}
      </div>
      <div className={emailInputCLases}>
        <label htmlFor="email"> Email </label>
        <input className="form-control" onChange={emailHandler} />
        { !emailIsValid && <p className="error-text"> please check that the name is correct </p>}
      </div>
      <div className="form-actions">
        <button disabled={true}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
