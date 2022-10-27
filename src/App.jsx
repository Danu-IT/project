import React, { useState } from 'react';
import './App.css';
import Message from './components/Message/Message';

const App = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const sendMessage = () => {
    setMessage(input);
  }
  return (
    <div className="App">
      <Message text={message}></Message>
      <div style={{display: 'block'}}>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
