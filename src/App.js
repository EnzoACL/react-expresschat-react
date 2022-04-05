import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Messages from './components/Messages/Messages'
import { useImperativeHandle, useState } from 'react';
import SendMessage from './components/SendMessages/SendMessage'

function App() {
  const [userName, setUserName] = useState()
  const [userPassword, setUserPassword] = useState()
  const [userId, setUserId] =useState()
  const changeName = (event) => {
    const newName = event.target.value
    setUserName(newName)
  }
  const changePassword = (event) => {
    const newPassword = event.target.value
    setUserPassword(newPassword)
  }

  
   
    async function get(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }

    async function getUsers () {
      const users = await get("https://web-develop-react-express-chat.herokuapp.com/users/");
      const usersString = JSON.stringify(users);
      console.log(usersString)
      for (let idx = 0; idx < users.length; idx++) {
        if (userName === users[idx].name) {
          setUserId(users[idx].id)
          console.log(userName)
          console.log(userId)
        }
      }
  }
  

  
  return (
    <>
      <Login/>
      <h1>Login</h1>
      <input type="text" onChange={changeName} />
      <input type="text" onChange={changePassword} />
      <input type="button" value="log in" onClick={getUsers}/>
      
      <Messages id={`${userId}`} secret={`${userPassword}`}/>
      <SendMessage id={`${userId}`} secret={`${userPassword}`} />
    </>
  );
}

export default App;
