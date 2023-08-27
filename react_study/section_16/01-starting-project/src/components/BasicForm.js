import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const validWord  = (word)  => word.trim() != 0 
  const validEmail = (email) => email.includes("@") && validWord(email)
  const nameInputHook = useInput(validWord);
  const lastNameInputHook = useInput(validWord);
  const emailInputHook = useInput(validEmail);

  const nameIsValid     = nameInputHook.validInput;
  const lastNameIsValid = lastNameInputHook.validInput;
  const emailIsValid    = emailInputHook.validInput;

  const nameClass     = nameIsValid     ? "form-control" : "form-control invalid";
  const lastNameClass = lastNameIsValid ? "form-control" : "form-control invalid";
  const emailClass    = emailIsValid    ? "form-control" : "form-control invalid";

  let formIsValid = false;

  if(nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) {
      return;
    }
    nameInputHook.reset();
    lastNameInputHook.reset();
    emailInputHook.reset();
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={ nameInputHook.value } onChange={nameInputHook.valueHandler}/>
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={ lastNameInputHook.value } onChange={lastNameInputHook.valueHandler}/>
        </div>
        { !nameIsValid     && <p> The name entered is not valid </p> }
        { !lastNameIsValid && <p> The last name entered is not valid </p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputHook.valueHandler} />
        { !emailIsValid && <p> The email entered is not valid </p> }
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
