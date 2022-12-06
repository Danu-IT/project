import { List, ListItemText, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import classes from './ListChats.module.scss'

const ListChats = ({chats, children}) => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const addChat = () => {
    const chat = {id: v4(), name: 'Ольга', messages: []}
    dispatch({type: 'ADD_CHAT', payload: chat})
  }
  return (
    <>
    <List style={{background: theme.palette.primary.main, color: theme.palette.text.secondary}} className={classes.chats} component="div" href="#simple-list">
      {children}
        <h2 style={{textAlign: 'center'}}>Chats</h2>
        {chats.map((chat,i) => {
            return(
                <ListItemText key={chat.id}>
                  <Link style={{textDecoration: 'none'}} to={`/chats:${i + 1}`}>{chat.name}</Link>
                </ListItemText>
            )
        })}
        <div onClick={addChat} style={{cursor: 'pointer'}}>Add a chat +</div> 
    </List>
    </>
  )
}

export default ListChats