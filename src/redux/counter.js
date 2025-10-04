import {createSlice} from '@reduxjs/toolkit' ;

const counterSlice = createSlice({
    name:"counter",
    initialState: {value:0},
    reducers:{
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) =>{
            state.value -=1;
        },updateBulk : (state, payload) =>{
            state.value = state.value * payload;
        }

    }
})

export const {increment, decrement, updateBulk} = counterSlice.actions;
export default counterSlice.reducers;