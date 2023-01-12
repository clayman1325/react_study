import { useReducer, useState } from 'react';

const initialInputState = {
  value:"",
  isTouched: false
}
const inputStateReducer = (state, action) => { 
  if(action.type == "INPUT") {
    return {value: action.value, isTouched: true }
  } else if(action.type == "RESEY") {
    return {value: "", isTouched: false }
  }
  return inputStateReducer;
}

const useInput = (props) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
  const validInputFunction = props(inputState.value);
  const validInput = !inputState.isTouched || validInputFunction && inputState.isTouched

  const valueHandler = (event) => {
    dispatch({type: "INPUT", value: event.target.value})
    setValueActivated(true)
  }
  const reset = () => {
    dispatch({type: "RESET"})
    setValue("")
    setValueActivated(false)
  }

  return {
    value,
    activated: valueActivated,
    validInput,
    valueHandler,
    reset
  }
}

export default useInput;



