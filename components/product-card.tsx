import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/interfaces/product'

export function ProductCard ({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className='card__item'>
      <Image
        alt={product.name}
        src={product.images[0]}
        width='200'
        height='200'
      />
      <div className='mt-5'>
        <h2>{product.name}</h2>
        <h3>Precio: {product.price}$</h3>
      </div>
    </Link>
  )
}
