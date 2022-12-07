import React from 'react'
import { useParams } from 'react-router'
import classes from './Messages.module.scss'

const Messages = ({chats}) => {
  const params = useParams();
  if(!params['*']?.includes('chats:') || params['*'] === undefined){
    return null
  }
  let nowMessages = params['*'].split('chats:')[1];
  return (
    <div style={{minHeight: '100vh'}}>
      <h1 style={{textAlign: 'center'}}>Dialog</h1>
        {chats[nowMessages - 1].messages && chats[nowMessages - 1].messages.map(message => {
          return (
            <div className={classes.dialog} style={{alignItems: message.author === 'robot' ? 'flex-end' : 'flex-start'}} key={message.id}>
              <div style={{background: message.author === 'robot' ? 'blue': 'rgb(42, 219, 42)', color: message.author === 'robot' ? 'white' : 'black'}} className={classes.message}>
                <div className={classes.message__up}>
                  <h1>{message.author}</h1>
                  <span>{message.time}</span>
                </div>
                <div>{message.text}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Messages