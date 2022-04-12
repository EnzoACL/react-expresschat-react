import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Messages from './components/Messages/Messages'
import { useState } from 'react';
import SendMessage from './components/SendMessages/SendMessage'
import Data from './components/DataToApp/Data'
function App() {

  const [data, setData] = useState({
    id: 0,
    user: "",
    password: "",
    registercheck: false,
    loggedcheck: false
  })
 
  
  
  return (
    <>
      <div className="general">
        <div className='logpag'>
          {!data.registercheck && !data.loggedcheck && <Data dataSetter={setData} />}
        </div>
        <div className='regpag'>
          {data.registercheck && <Login />}
        </div>
        <div className="mensajes">
          {data.loggedcheck && <Messages id={data.id} secret={data.password} />}
          {data.loggedcheck &&<SendMessage id={data.id} secret={data.password} />}      
        </div>
      </div>
    </>
  );
}

export default App;









/*
async function get(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getUsers () {
  const users = await get("https://web-develop-react-express-chat.herokuapp.com/users/");
  const usersString = JSON.stringify(users);
  console.log(usersString)
  // Bucle para obtener el ID del usuario usando su nombre
  for (let idx = 0; idx < users.length; idx++) {
    if (userName === users[idx].name) {
      setUserId(users[idx].id)
      console.log(userName)
      console.log(userId)
    }
  */