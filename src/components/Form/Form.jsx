import React, { useEffect, useRef, useState } from 'react'
import { v4 } from 'uuid';
import { timeNow } from '../../utils/time';
import classes from './Form.module.scss'
import { Button, InputBase } from '@mui/material';
import { useTheme } from '@emotion/react';

const Form = ({addingNewMessage, obj, setObj}) => {
    const {text, author} = obj;
    const [nameError, setNameError] = useState(false);
    const [clusterFilling, setClusterFilling] = useState(false);
    const focus = useRef(null);
    const theme = useTheme();

    useEffect(() => focus.current.focus() ,[])

    const validationAndCreateMessage = (text, author) => {
        if(author === 'robot'){
            setNameError(true);
            return false;
        }
        if(author === '' || text === ''){
            setClusterFilling(true);
            return false;
        }
        return {
            id: v4(),
            text: text,
            author: author,
            time: timeNow()
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const newMessage = validationAndCreateMessage(text, author);
        newMessage && addingNewMessage(newMessage);
    }
    useEffect(() => {
        setNameError(false);
        setClusterFilling(false)
    },[text, author]);

  return (
    <form className={classes.form} onSubmit={formSubmit}>
        <div className={classes.form__container}>
            <InputBase style={{color: 'black'}} ref={focus} className='textInput' placeholder='Автор сообщения' type="text" value={author} onChange={(e) => setObj(prev => ({...prev, author: e.target.value}))} autoFocus></InputBase>
            {nameError && <p style={{color: 'red',fontSize: '14px', background: 'inherit', border: 'none'}}>Нельзя использовать зарезервированное имя автора</p>}
            <InputBase style={{color: 'black'}} className='textInput' placeholder='Текст сообщения' type="text" value={text} onChange={(e) => setObj(prev => ({...prev, text: e.target.value}))}/>
            <button variant="text">Отправить</button>
            {clusterFilling && <p style={{color: 'red',fontSize: '14px', background: 'inherit', border: 'none'}}>Заполните все поля</p>}
        </div>
    </form>
  )
}

export default Form