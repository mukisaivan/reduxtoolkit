import { createSlice } from "@reduxjs/toolkit"

const intialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    incremented: (state) => {
      if (state.count < 5) {
        state.count += 1
      }
    },
    decremented: (state) => {
      if (state.count > 0) {
        state.count -= 1
      }
    },
  },
})

const counterReducer = counterSlice.reducer

export const { incremented, decremented } = counterSlice.actions

export default counterReducer
