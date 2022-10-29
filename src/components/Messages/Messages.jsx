import React from 'react'
import classes from './Messages.module.scss'

const Messages = ({messages}) => {
  return (
    <div className={classes.dialog}>
      <h1 style={{textAlign: 'center'}}>Dialog</h1>
        {messages.map(message => {
          return (
            <div key={message.id}>
              <div className={classes.message}>
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