'use client'

import { useLocker } from '@/hook/useLocker'
import type { Product } from '@/interfaces/product'

export function ButtonCart ({ product }: { product: Product }) {
  const { getCartItem } = useLocker()

  const checkQuantity = () => {
    const quantity = document.querySelector('select')?.value
    product.quantity = Number(quantity)
    getCartItem(product)
  }

  return (
    <>
      <select
        className="mb-10 border border-zinc-300 rounded-xl"
        defaultValue="1"
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      <button
        className='button'
        onClick={() => { checkQuantity() }}
      >
        Añadir al carrito
      </button>
    </>
  )
}
