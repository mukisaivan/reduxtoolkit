"use client"
import { Provider } from "react-redux"
import cartStore from "../react-reducer/cartapp/cartStore"

interface Props {
  children: React.ReactNode
}

export default function CartProvider({ children }: Props) {
  return <Provider store={cartStore}>{children}</Provider>
}
