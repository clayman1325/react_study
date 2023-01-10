import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameActivated, setNameActivated] = useState(false)

  const nameIsValid = !nameActivated || name.trim() != 0 && nameActivated;

  const nameHandler = (event) => {
    setName(event.target.value)
    setNameActivated(true)
  }
  const onBlurHandler = () => {
    setNameActivated(true)
  }
  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if(!nameIsValid) {
      return;
    }
    setName("")
    setNameActivated(false)
  }

  const nameInputCLases = nameIsValid ? "form-control" : "form-control invalid"

  useEffect(() =>{
    if(nameIsValid) console.log("yei")
  },[nameIsValid])

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputCLases}>
        <label htmlFor='name'>Your Name</label>
        <input className={nameInputCLases} ref={nameRef} type='text' id='name' value={name} onChange={nameHandler} onBlur={onBlurHandler}/>
        { !nameIsValid && <p className="error-text"> please check that the name is correct </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
