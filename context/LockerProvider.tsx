'use client'

import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import type { Product } from '@/interfaces/product'

interface LockerContextData {
  cart: Product[]
  getCartItem: (item: Product) => void
  deleteCartItem: (item: Product) => void
  pay: () => void
}

const contextData = {
  cart: [],
  getCartItem: () => {},
  deleteCartItem: () => {},
  pay: () => {}
}

export const LockerContext = createContext(contextData as LockerContextData)

export default function LockerProvider ({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const getCartItem = (item: Product) => {
    if (cart.some(itemState => itemState.id === item.id)) {
      const carritoActualizado = cart.map(itemState => {
        if (itemState.id === item.id) {
          itemState.quantity = item.quantity
        }
        return itemState
      })

      setCart([...carritoActualizado])
      localStorage.setItem('carrito', JSON.stringify(cart))
      toast.success('Se ha añadido el producto en el carrito', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    } else {
      setCart([...cart, item])
      localStorage.setItem('carrito', JSON.stringify(cart))
      toast.success('Se ha añadido el producto en el carrito', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }

  const deleteCartItem = (item: Product) => {
    const carritoActualizado = cart.filter(itemState => itemState.id !== item.id)
    setCart([...carritoActualizado])
    localStorage.setItem('carrito', JSON.stringify(cart))
    toast.success('Se ha eliminado el producto del carrito', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const pay = () => {
    setCart([])
    localStorage.removeItem('carrito')
    toast.success('Se ha realizado el pago', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const data = {
    cart,
    getCartItem,
    deleteCartItem,
    pay
  }

  return (
    <LockerContext.Provider value={data}>
      {children}
    </LockerContext.Provider>
  )
}
