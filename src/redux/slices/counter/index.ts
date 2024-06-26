import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: 5,
    name: "counter",
    reducers: {
        increment : (state) => {
            return state + 1
        },
        decrement: (state) => {
            return state - 1
        }
    }
})

export const { decrement, increment } = counterSlice.actions
export default counterSlice.reducer