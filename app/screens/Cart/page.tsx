import {
  clearCart,
  removeFromCart,
} from "@/app/react-reducer/cartapp/cartReducer"
import {
  CartAppDispatch,
  CartRootState,
} from "@/app/react-reducer/cartapp/cartStore"
import { CounterRootState } from "@/app/react-reducer/counter/astore/store"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
  const dispatch = useDispatch<CartAppDispatch>()
  const { items, total } = useSelector((state: CartRootState) => state.cart)

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} x {item.quantity}
          </p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart
