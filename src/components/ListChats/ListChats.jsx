import { List, ListItemText, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import classes from './ListChats.module.scss'

const ListChats = ({chats, children}) => {
    const theme = useTheme();
  return (
    <List style={{background: theme.palette.primary.main, color: theme.palette.text.secondary}} className={classes.chats} component="div" href="#simple-list">
      {children}
        <h2 style={{textAlign: 'center'}}>Chats</h2>
        {chats.map((chat,i) => {
            return(
                <ListItemText key={chat.id}>
                  <Link to={`/chats${i + 1}`}>{chat.name}</Link>
                </ListItemText>
            )
        })}
    </List>
  )
}

export default ListChats