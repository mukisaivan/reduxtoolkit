import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartReducer"

const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export type CartRootState = ReturnType<typeof cartStore.getState>
export type CartAppDispatch = typeof cartStore.dispatch

export default cartStore
