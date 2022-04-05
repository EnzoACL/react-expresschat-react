import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Messages from './components/Messages/Messages'
import { useState } from 'react';
import SendMessage from './components/SendMessages/SendMessage'

function App() {
  
  

  
  return (
    <>
      <Login/>
      <Messages id={"1649148283973"} secret={"1"}/>
      <SendMessage id={"1649148283973"} secret={"1"} />
    </>
  );
}

export default App;
