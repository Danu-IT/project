import { v4 } from 'uuid';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { timeNow } from '../utils/time';

const initialState = [{id: v4(), name: 'Олег', messages: []}, {id: v4(), name: 'Сергей', messages: []}];
const messageRobot = 'Привет, получил твое сообщение, готов обрабатывать данные';

export const fetchItems = createAsyncThunk(
  'fetchItems',
  async function(_,thunkApi){
      console.log(thunkApi)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = response.json()
      // Промис
      console.log(data)
      return data
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
        addRobotMessage: (state, action) => {
            if(state[action.payload - 1]?.messages.length > 0 && state[action.payload - 1].messages.slice(-1)[0].author !== 'robot')  {
                const answer = [...state].map((chat, i) => {
                  if(i === action.payload - 1){
                    return {...chat, messages: [...chat.messages, {text: messageRobot, author: 'robot', id: v4(), time: timeNow()}]}
                  }
                  return chat 
                })
            return answer
            }
            return state;
        },
        addChat: (state, action) => {
            return [...state, action.payload]
        },
        getPosts:(state,action)=>{
          console.log(action.payload)
          state = action.payload
      }
    },
    extraReducers:{
      [fetchItems.fulfilled]:(state,action)=>{
          state = action.payload
      },
  }
})

export const { addMessage, addRobotMessage, addChat, getPosts } = chatSlice.actions;
export default chatSlice.reducer;