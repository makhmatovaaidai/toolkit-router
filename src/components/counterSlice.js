import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter > 0) state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
    decrementBy: (state, action) => {
      if (state.counter > 0) {
      } else {
        alert("Минимальный число");
      }
      state.counter -= action.payload;
    },
  },
});
export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
export default counterSlice.reducer;
