import React,  { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setusersList] = useState([])

  const handleAddUser = (user) => {
    console.log(user)
    setusersList((prevUsers) => {
      user = {...user, id: Math.random().toString()}
      prevUsers.push(user);
      return [user];
    })
  }
  
  return (
    <div>
      <AddUser onSubmitForm={handleAddUser}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
