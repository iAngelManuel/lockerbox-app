'use client'

import { useLocker } from '@/hook/useLocker'
import { toast } from 'react-toastify'

export function ShopCart () {
  const { cart, deleteCartItem, pay } = useLocker()

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const delivery = subtotal * 0.01
  const commission = subtotal * 0.1
  const total = subtotal + delivery + commission

  const checkOut = () => {
    if (cart.length === 0) {
      toast.error('No hay productos en el carrito', {
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
      pay()
    }
  }

  return (
    <>
      <section className="w-full border border-zinc-300 rounded-xl p-10">
        <h3 className="text-4xl font-bold text-center">Carrito de Compras</h3>
        <div className="space-y-5">
          {cart.length === 0
            ? <h4 className="text-xl text-center font-bold mt-5 mb-5">No hay productos en el carrito</h4>
            : cart.map(item => (
              <div key={item.id} className="flex gap-2 items-center border-b border-zinc-300">
                <div>
                  <img
                    src={item.images[1]}
                    alt={item.name}
                    className="w-20 h-20 md:w-40 md:h-40 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-red-600">{item.name}</h3>
                  <p className="text-xl font-bold">Precio Unitario: ${item.price}</p>
                  <p className="text-xl font-bold">Cantidad: {item.quantity}</p>
                  <p className="text-xl font-bold">Subtotal: {item.quantity * item.price}</p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={() => { deleteCartItem(item) }}
                    className="border-2 border-red-600 text-red-600 px-3 py-1 hover:bg-red-600 hover:text-white rounded-xl"
                  >Eliminar</button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="w-full border border-zinc-300 rounded-xl p-10">
        <h3 className="text-4xl font-bold text-center mb-5">Resumen de compra</h3>
        <div className="space-y-3 mb-5">
          <p className="text-xl font-bold">Subtotal: ${subtotal}</p>
          <p className="text-xl font-bold">Envío: ${delivery}</p>
          <p className="text-xl font-bold">Comisión: ${commission}</p>
          <p className="text-xl font-bold">Total: ${total}</p>
        </div>
        <button
          onClick={() => { checkOut() }}
          className="button"
        >Proceder Pago</button>
      </section>
    </>
  )
}
