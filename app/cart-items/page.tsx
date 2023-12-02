import { ShopCart } from '@/components/shop-cart'

export default function CartItemPage () {
  return (
    <article className="flex flex-col md:flex-row gap-20 justify-center items-center mt-10 mb-20">
      <ShopCart />
    </article>
  )
}
