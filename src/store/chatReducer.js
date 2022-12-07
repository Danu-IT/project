import { v4 } from 'uuid';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { timeNow } from '../utils/time';

const initialState = [{id: v4(), name: 'Олег', messages: []}, {id: v4(), name: 'Сергей', messages: []}];
const messageRobot = 'Привет, получил твое сообщение, готов обрабатывать данные';

export const fetchItems = createAsyncThunk(
  'fetchItems',
  function(param,thunkApi){
    return param
  }
) 

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const answer = [...state].map((chat, i) => {
                if(i === action.payload[0] - 1){
                  return {...chat, messages: [...chat.messages, action.payload[1]]} 
                }
                return chat
              })
           return answer
        },
        addChat: (state, action) => {
            return [...state, action.payload]
        },
    },
    extraReducers:{
      [fetchItems.fulfilled]:(state,action)=>{
        const answer = [...state].map((chat, i) => {
          if(i === action.payload - 1){
            return {...chat, messages: [...chat.messages, {text: messageRobot, author: 'robot', id: v4(), time: timeNow()}]}
          }
          return chat 
        })
        return answer
      },
  }
})

export const { addMessage, addChat } = chatSlice.actions;
export default chatSlice.reducer;