import { v4 } from 'uuid';
import { timeNow } from '../utils/time';
const initialState = [{id: v4(), name: 'Олег', messages: []}, {id: v4(), name: 'Сергей', messages: []}];
const messageRobot = 'Привет, получил твое сообщение, готов обрабатывать данные';

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {  
      case "ADD_MESSAGE":
        const answer = [...state].map((chat, i) => {
            if(i === action.payload[0] - 1){
              return {...chat, messages: [...chat.messages, action.payload[1]]} 
            }
            return chat
          })
       return answer
      case "ADD_ROBOT_MESSAGE":
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
      case "ADD_CHAT":
        return [...state, action.payload]
      default:
        return state;
    }
}