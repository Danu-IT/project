import { List, ListItemText, useTheme } from '@mui/material'
import React from 'react'
import classes from './ListChats.module.scss'

const ListChats = ({chats}) => {
    const theme = useTheme()
  return (
    <List style={{background: theme.palette.success.main, color: theme.palette.text.secondary}} className={classes.chats} component="div" href="#simple-list">
        <h2 style={{textAlign: 'center'}}>Chats</h2>
        {chats.map((chat,i) => {
            return(
                <ListItemText key={chat.id}>{chat.name}</ListItemText>
            )
        })}
    </List>
  )
}

export default ListChats