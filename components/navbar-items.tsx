'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavbarItems () {
  const pathname = usePathname()
  return (
    <>
      <li className={`${pathname === '/' ? 'text-red-600' : 'text-default-500'} font-extrabold text-center`}>
        <Link href='/'>Inicio</Link>
      </li>
      <li className={`${pathname === '/about' ? 'text-red-600' : 'text-default-500'} font-extrabold text-center`}>
        <Link href='/about'>Nosotros</Link>
      </li>
      <li className={`${pathname === '/product' ? 'text-red-600' : 'text-default-500'} font-extrabold text-center`}>
        <Link href='/product'>Productos</Link>
      </li>
      <li className={`${pathname === '/cart-items' ? 'text-red-600' : 'text-default-500'} font-extrabold text-center`}>
        <Link href='/cart-items'>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathname === '/cart-items' ? '#EF4444' : '#1F2937'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />
            <path
              d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            />
            <path
              d="M17 17h-11v-14h-2"
            />
            <path
              d="M6 5l14 1l-1 7h-13"
            />
          </svg>
        </Link>
      </li>
      <li className={`${pathname === '/user' ? 'text-red-600' : 'text-default-500'} font-extrabold text-center`}>
        <Link href='/user'>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={pathname === '/user' ? '#EF4444' : '#1F2937'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"
            />
            <path
              d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741"
            />
            <path
              d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
            />
          </svg>
        </Link>
      </li>
    </>
  )
}
