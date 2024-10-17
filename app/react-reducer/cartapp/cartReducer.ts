// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
      state.total += action.payload.price * action.payload.quantity
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((i) => i.id === action.payload)
      if (index !== -1) {
        const item = state.items[index]
        state.total -= item.price * item.quantity
        state.items.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
})

const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartReducer
