import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';

import Form from './components/Form/Form';
import Messages from './components/Messages/Messages';

const App = () => {
  const initialState = {text: '', author: '', id: 1};
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(initialState);

  const addingNewMessage = (message) => {
    setMessages([...messages, message]);
    setInput(initialState);
  }

  const messageRobot = 'Привет, получил твое сообщение, готов получать данные';

  useEffect(() => {
    if(messages.length > 0 && messages.slice(-1)[0].author !== 'robot')  {
      setTimeout(() => setMessages(prev => [...prev, {text: messageRobot, author: 'robot', id: v4()}]), 1000) 
    }
  },[messages])

  return (
    <div className="App">
      <Form addingNewMessage={addingNewMessage} obj={input} setObj={setInput}></Form>
      <hr></hr>
      <Messages messages={messages}></Messages>
    </div>
  );
}

export default App;