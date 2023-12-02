import { HomeBanner } from '@/components/home-banner'
import { ProductCard } from '@/components/product-card'
import type { Product } from '@/interfaces/product'

async function getAllProducts () {
  const response = await fetch('https://techstore-rest-api.vercel.app/products', { cache: 'no-cache' })
  const data = await response.json()
  return data as Product[]
}

export default async function Home () {
  const products = await getAllProducts()
  return (
    <>
      <div className="mt-10">
        <HomeBanner product={ products[5] }/>
      </div>
      <h1 className='my-10'>Todos los productos</h1>
      <div className='card__container'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={ product }
          />
        ))}
      </div>
    </>
  )
}
