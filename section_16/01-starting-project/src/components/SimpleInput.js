import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameActivated, setNameActivated] = useState(false)
  const [email, setEmail] = useState("");
  const [emailActivated, setEmailActivated] = useState(false)

  const nameIsValid  = !nameActivated  || name.trim() != 0 && nameActivated;
  const emailFormat  = email.split("").find((char) => char=="@")
  //                   email.includes("@");
  const emailIsValid = !emailActivated || email.trim() != 0 && emailActivated && emailFormat;

  const nameHandler = (event) => {
    setName(event.target.value)
    setNameActivated(true)
  }
  const onBlurHandler = () => {
    setNameActivated(true);
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
    setEmailActivated(true);
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
    setName("")
    setNameActivated(false)
  }

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputCLases}>
        <label htmlFor='name'>Your Name</label>
        <input className={nameInputCLases} ref={nameRef} type='text' id='name' value={name} onChange={nameHandler} onBlur={onBlurHandler}/>
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
