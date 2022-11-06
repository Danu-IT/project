import Switch from '@mui/material/Switch'; 
import { createTheme, ThemeProvider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';

import Form from './components/Form/Form';
import ListChats from './components/ListChats/ListChats';
import Messages from './components/Messages/Messages';
import { timeNow } from './utils/time';
import { useTheme } from '@emotion/react';

const lightTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const initialState = {text: '', author: '', id: 1}; 
  const [isDark, setIsDark] = useState(false);
  const [chats, setChats] = useState([{id: v4(), name: 'Олег'}, {id: v4(), name: 'Сергей'}]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(initialState);
  const theme = useTheme()

  const addingNewMessage = (message) => {
    setMessages([...messages, message]);
    setInput(initialState);
  }

  const messageRobot = 'Привет, получил твое сообщение, готов обрабатывать данные';

  useEffect(() => {
    if(messages.length > 0 && messages.slice(-1)[0].author !== 'robot')  {
      setTimeout(() => setMessages(prev => [...prev, {text: messageRobot, author: 'robot', id: v4(), time: timeNow()}]), 1500) 
    }
  },[messages])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
        <ListChats chats={chats}></ListChats>
        <div className='dialog'>
          <Switch value={isDark} onChange={() => setIsDark(prev => !prev)} />
          <Form addingNewMessage={addingNewMessage} obj={input} setObj={setInput}></Form>
          <hr></hr>
          <Messages messages={messages}></Messages>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;