import Switch from '@mui/material/Switch'; 
import { ThemeProvider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../App.css';

import Form from '../components/Form/Form';
import ListChats from '../components/ListChats/ListChats';
import Messages from '../components/Messages/Messages';
import { darkTheme, lightTheme } from '../index';
import NavigateCustom from '../components/Navigate';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const initialState = {text: '', author: '', id: 1}; 
  const [isDark, setIsDark] = useState(false);
  const [input, setInput] = useState(initialState);
  const params = useParams();
  const dispatch = useDispatch();
  const chats = useSelector(state => state)
  const nowMessages = params['*'];

  const addingNewMessage = (message) => {
    if(nowMessages) {
      const param = nowMessages.split('chats:')[1];
      dispatch({type: 'ADD_MESSAGE', payload: [param, message]});
      setInput(initialState);
    }
  }

  useEffect(() => {
  if(nowMessages){
    const param = nowMessages.split('chats:')[1];
    setTimeout(() => dispatch({type: 'ADD_ROBOT_MESSAGE', payload: param}), 1500)
  }
  },[chats])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div style={{background: isDark ? 'rgb(218, 238, 255)' : 'rgb(2, 57, 112)'}} className="App">
        <ListChats chats={chats}>
            <NavigateCustom></NavigateCustom>
        </ListChats>
        <div style={{color: 'black'}} className='dialog'>
          <Switch value={isDark} onChange={() => setIsDark(prev => !prev)} />
          <Form addingNewMessage={addingNewMessage} obj={input} setObj={setInput}></Form>
          <Messages chats={chats}></Messages>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;