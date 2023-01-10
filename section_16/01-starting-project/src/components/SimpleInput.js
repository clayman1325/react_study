import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true)

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const formSubmisionHandler = (event) => {
    event.preventDefault();
    console.log(name)
    console.log(nameRef.current.value)
    if(name.trim() == 0) {
      setNameIsValid(false)
      return;
    }
    setNameIsValid(true);
    setName("")
  }

  const onBlurHandler = () => {
    if(name.trim() == 0) {
      setNameIsValid(false)
      return;
    }
  }

  const onKeyDownHandler = (event) => {
    if(event.target.value.trim() != 0) {
      setNameIsValid(true)
    }
  }

  const nameInputCLases = nameIsValid ? "form-control" : "form-control invalid"

  useEffect(() =>{
    if(nameIsValid) console.log("yei")
  },[nameIsValid])

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputCLases}>
        <label htmlFor='name'>Your Name</label>
        <input className={nameInputCLases} ref={nameRef} type='text' id='name' value={name} onChange={nameHandler} onBlur={onBlurHandler} onKeyUp={onKeyDownHandler}/>
        { !nameIsValid && <p className="error-text"> please check that the name is correct </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
