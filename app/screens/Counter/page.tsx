import { CartAppDispatch } from "@/app/react-reducer/cartapp/cartStore"
import {
  decremented,
  incremented,
} from "@/app/react-reducer/counter/aareducers/reducer"
import {
  CounterAppDispatch,
  CounterRootState,
} from "@/app/react-reducer/counter/astore/store"
import { useDispatch, useSelector } from "react-redux"

export default function Counter() {
  const counter = useSelector((state: CounterRootState) => state.counter.count)
  const dispatch = useDispatch<CounterAppDispatch>()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 bg-gray-200 rounded text-black"
          onClick={() => dispatch(decremented())}
        >
          -
        </button>
        <div className="text-2xl">{counter}</div>
        <button
          className="p-2 bg-gray-200 rounded text-black"
          onClick={() => dispatch(incremented())}
        >
          +
        </button>
      </div>
    </div>
  )
}
