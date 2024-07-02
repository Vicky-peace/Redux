import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const  initialState: CounterState = {
    value: 0,
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
       increment: (state) => {
              state.value += 1;
       },
       decrement: (state) => {
                state.value -= 1;
       },
       incrementByAmount: (state, action:PayloadAction<number>) => {
                state.value += action.payload;   // i.e state = 0 + 5 where 5 is the payload
       }  
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;