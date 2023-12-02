'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useLocker } from '@/hook/useLocker'

export function UserForm () {
  const { cart, pay } = useLocker()
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [street1, setStreet1] = useState('')
  const [street2, setStreet2] = useState('')
  const [street3, setStreet3] = useState('')
  const [codePostal, setCodePostal] = useState('')
  const [departament, setDepartament] = useState('')
  const [city, setCity] = useState('')
  const isVoid = [name, country, street1, codePostal, departament, city]

  const checkOut = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cart.length === 0) {
      return toast.error('No hay productos en el carrito', {
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

    if (isVoid.includes('')) {
      return toast.error('Todos los campos son obligatorios', {
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

    pay()
    setName('')
    setCountry('')
    setStreet1('')
    setStreet2('')
    setStreet3('')
    setCodePostal('')
    setDepartament('')
    setCity('')
  }

  return (
    <form
      onSubmit={checkOut}
      className="border border-zinc-300 p-5 lg:p-10 rounded-xl"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre Cliente
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => { setName(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
          País
        </label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={e => { setCountry(e.target.value) }}
          className="w-full border border-zinc-200 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline shadow appearance-none"
        >
          <option value="">Selecciona un país</option>
          <option value="Colombia">Colombia</option>
          <option value="Peru">Peru</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Brasil">Brasil</option>
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Venezuela">Venezuela</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street1">
          Dirección 1
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="street1"
          type="text"
          placeholder="Dirección de residencia 1"
          value={street1}
          onChange={e => { setStreet1(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street2">
          Dirección 2
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="street2"
          type="text"
          placeholder="Dirección de residencia 2"
          value={street2}
          onChange={e => { setStreet2(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street1">
          Dirección 3
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="street3"
          type="text"
          placeholder="Dirección de residencia 3"
          value={street3}
          onChange={e => { setStreet3(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code-p">
          Código Postal
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="code-p"
          type="text"
          placeholder="080001"
          value={codePostal}
          onChange={e => { setCodePostal(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departament">
          Departamento
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="departament"
          type="text"
          placeholder="Atlántico"
          value={departament}
          onChange={e => { setDepartament(e.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          Ciudad
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="Barranquilla"
          value={city}
          onChange={e => { setCity(e.target.value) }}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="button"
          type="submit"
        >
          Pagar y Enviar Producto
        </button>
      </div>
    </form>
  )
}
