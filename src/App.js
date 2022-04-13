import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Messages from './components/Messages/Messages'
import { useEffect, useState } from 'react';
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
      <div className='principal'>
          {!data.registercheck && !data.loggedcheck && <Data dataSetter={setData} />}        
          {data.registercheck && <Login />}
          {data.loggedcheck && <Messages id={data.id} secret={data.password} />}
          {data.loggedcheck &&<SendMessage id={data.id} secret={data.password} />}      
      </div> 
    </>
  );
}

export default App;