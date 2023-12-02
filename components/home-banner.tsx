import React, { type FC } from 'react'
import Image from 'next/image'

import { type Product } from '../interfaces/product'

interface Props {
  product: Product
}

export const HomeBanner: FC<Props> = ({ product }) => {
  return (
    <div className="flex gap-5 md:gap-0 flex-col md:flex-row banner">
      <div>
        <h2 className='banner__title'>Ultimo Producto</h2>
        <h2 className='banner__title--product'>
          {product.name}
        </h2>
        <h3 className='banner__subtitle'>
          {product.category}
        </h3>
      </div>
      <Image
        alt={product.name}
        src={product.images[0]}
        width='350'
        height='350'
      />
    </div>
  )
}
