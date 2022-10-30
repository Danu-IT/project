import React from 'react'
import classes from './Messages.module.scss'

const Messages = ({messages}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Dialog</h1>
        {messages.map(message => {
          return (
            <div className={classes.dialog} style={{alignItems: message.author === 'robot' ? 'flex-end' : 'flex-start'}} key={message.id}>
              <div style={{background: message.author === 'robot' ? 'blue': 'rgb(42, 219, 42)', color: message.author === 'robot' ? 'white' : 'black'}} className={classes.message}>
                <h1>{message.author}</h1>
                <div>{message.text}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Messages