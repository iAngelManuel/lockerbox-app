import Image from 'next/image'
import { ButtonCart } from '@/components/button-cart'
import { type Product } from '@/interfaces/product'
import { type Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const { id } = params
  const response = await fetch(`https://techstore-rest-api.vercel.app/products/${id}`)
  const product = await response.json() as Product

  return {
    title: product.name
  }
}

async function getProduct (id: string) {
  const response = await fetch(`https://techstore-rest-api.vercel.app/products/${id}`, {
    next: {
      revalidate: 60
    }
  })

  const data = await response.json()
  return data as Product
}

export default async function ProductPage ({ params }: Props) {
  const product = await getProduct(params.id)

  return (
    <main className='min-h-screen pt-10'>
      <div className='product'>
        <Image
          alt={product.name}
          src={product.images[1]}
          width='700'
          height='700'
        />
        <div className="flex flex-col justify-evenly border-2 border-zinc-300 p-3 rounded-lg">
          <div className='mt-5 space-y-3'>
            <h1>{product.name}</h1>
            <h2>Descricion del producto:</h2>
            <p>{product.description}</p>
            <h3>Precio:</h3>
            <p>{product.price}</p>
            <h3>Stock disponible:</h3>
            <p>{product.inStock}</p>
          </div>

          <div>
            <h3>Selecciona la cantidad:</h3>
            <ButtonCart product={product} />
          </div>
        </div>
      </div>
    </main>
  )
}
