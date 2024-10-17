import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../aareducers/reducer"

const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type CounterRootState = ReturnType<typeof counterStore.getState>
export type CounterAppDispatch = typeof counterStore.dispatch

export default counterStore
