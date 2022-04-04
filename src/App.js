import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Messages from './components/Messages/Messages'
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState()
  const [userPassword, setUsePassword] = useState()

  
  return (
    <>
      <p>Prueba</p>
      <Login></Login>
    </>
  );
}

export default App;
