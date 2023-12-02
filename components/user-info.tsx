'use client'

import { useLocker } from '@/hook/useLocker'

export function UserInfo () {
  const { cart, deleteCartItem } = useLocker()
  return (
    <>
      <section>
        <h2 className="text-6xl text-center text-red-600 font-extrabold">Mis datos</h2>
        <p className="text-4xl text-center text-black font-bold my-2">Total Pedidos: 8</p>
        <p className="text-4xl text-center text-black font-bold my-2">Ganancia: $3.432</p>
      </section>

      <section className="mt-20">
        {cart.length === 0
          ? <h4 className="text-xl text-center font-bold mt-5 mb-5">No hay productos en el carrito</h4>
          : cart.map(item => (
                <div key={item.id} className="flex gap-2 items-center border-b border-zinc-300">
                  <div>
                    <img
                      src={item.images[0]}
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
      </section>
    </>
  )
}
