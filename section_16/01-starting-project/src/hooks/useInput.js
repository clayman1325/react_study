import { useState } from 'react';

const useInput = (props) => {
  const [value, setValue] = useState("");
  const [valueActivated, setValueActivated] = useState(false);

  const validInputFunction = props(value)
  const validInput = !valueActivated || validInputFunction && valueActivated

  const valueHandler = (event) => {
    setValue(event.target.value)
    setValueActivated(true)
  }
  const reset = () => {
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



