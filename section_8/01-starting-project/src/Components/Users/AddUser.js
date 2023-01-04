import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal"

const AddUser = props => {
  let [username, setUsername] = useState("");
  let [userAge, setUserAge]   = useState('');
  const [error, setError] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm({name: username, age: userAge});

    if(username.trim().length == 0 || userAge.trim().length == 0) {
      setError({
        title: "invailid input",
        message: "please eneter a valid name and age (non empty values)"
      })
      return;
    }
    if(+userAge < 0 ) {
      setError({
        title: "invailid age",
        message: "please eneter a valid age greater than 0"
      })
      return;
    }

    setUsername("")
    setUserAge("")
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleUserAgeChange = (event) => {
    setUserAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
    {error && <ErrorModal 
      title={error.title} 
      message={error.message}
      onCancelModal={errorHandler}
    >
    </ErrorModal>}
    <Card className={ classes.input }>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input 
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}/>
        <label htmlFor="username"> Age</label>
        <input 
          id="age" 
          type="text" 
          value={userAge}
          onChange={handleUserAgeChange}/>
        <Button type="submit"> Add User </Button>
      </form>
    </Card>
    </div>
  )
}

export default AddUser