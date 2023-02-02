import { useEffect, useState } from 'react'
import { getProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { ProductCard } from '../../components/ProductCard'

export const Products = () => {
  const [products, setProducts] = useState<ProductDto[]>([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          imgSrc={product.imageUrl}
          rating={product.rating}
          // price={product.price}
          //  size={product.size}
        />
      ))}
    </div>
  )
}
