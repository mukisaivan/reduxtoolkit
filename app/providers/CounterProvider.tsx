"use client"
import React from "react"
import { Provider } from "react-redux"
import counterStore from "../react-reducer/counter/astore/store"

type Props = {
  children: React.ReactNode
}

export default function CounterProvider({ children }: Props) {
  return <Provider store={counterStore}>{children}</Provider>
}
