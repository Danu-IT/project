import React from 'react'
import classes from './Message.module.scss'

const Message = ({text}) => {
  return (
    <div>
        {text && <div className={classes.message__container}>{text}</div>}
    </div>
  )
}

export default Message