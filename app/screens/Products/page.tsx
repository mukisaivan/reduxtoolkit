import { fetchProducts } from "@/app/react-reducer/asyncproducts/productsReducer"
import {
  ProductAppDispatch,
  ProductsRootState,
} from "@/app/react-reducer/asyncproducts/productsStore"
import { addToCart } from "@/app/react-reducer/cartapp/cartReducer"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

type Props = {}

export default function Products({}: Props) {
  const { error, items, loading } = useSelector(
    (state: ProductsRootState) => state.products
  )
  const dispatch = useDispatch<ProductAppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
