import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productsReducer"
import cartReducer from "../cartapp/cartReducer"

const productStore = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})

export type ProductsRootState = ReturnType<typeof productStore.getState>
export type ProductAppDispatch = typeof productStore.dispatch

export default productStore
