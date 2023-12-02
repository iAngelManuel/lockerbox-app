import { Nunito } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import LockerProvider from '@/context/LockerProvider'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'LockerBox - Inicio',
  description: 'Tienda de productos tecnologicos'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <LockerProvider>
          <Header />
          <main className="container mx-auto selection:bg-zinc-300 pb-20">{children}</main>
          <Footer />
          <ToastContainer />
        </LockerProvider>
      </body>
    </html>
  )
}
