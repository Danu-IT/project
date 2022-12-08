import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {pets: [], loading: false, error: null}

export const fetchPet = createAsyncThunk(
    'fetchPet',
    async function(_,thunkApi) {
        const repsonse = await fetch('https://random.dog/woof.json');
        const data = repsonse.json();
        return data
    }
  ) 

export const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {},
    extraReducers:{
      [fetchPet.pending]:(state,action)=>{
        state.loading = true;
        state.error = false;
      },
      [fetchPet.fulfilled]:(state,action)=>{
        state.pets = [action.payload.url];
        state.loading = false;
        state.error = false;
      },
      [fetchPet.rejected]:(state,action)=>{
        state.error = true
      },
  }
})

export const { addMessage, addChat } = petSlice.actions;
export default petSlice.reducer;