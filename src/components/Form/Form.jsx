import React, { useState } from 'react'
import { v4 } from 'uuid';
import classes from './Form.module.scss'

const Form = ({addingNewMessage, obj, setObj}) => {
    const {text, author} = obj;
    const [name, setName] = useState(false);

    const formSubmit = (e) => {
        setName(false)
        e.preventDefault();
        if(author === 'robot'){
            setName(true)
            return false;
        }
        if(author === '' || text === ''){
            return false
        }
        const newMessage = {
            id: v4(),
            text: text,
            author: author
        }
        addingNewMessage(newMessage);
    }

  return (
    <form className={classes.form} onSubmit={formSubmit}>
        <div className={classes.form__container}>
            <input placeholder='Автор сообщения' type="text" value={author} onChange={(e) => setObj(prev => ({...prev, author: e.target.value}))} />
            {name && <p style={{color: 'red',fontSize: '13px'}}>Нельзя использовать зарезервированное имя автора</p>}
            <input placeholder='Текст сообщения' type="text" value={text} onChange={(e) => setObj(prev => ({...prev, text: e.target.value}))}/>
            <button>Отправить</button>
        </div>
    </form>
  )
}

export default Form