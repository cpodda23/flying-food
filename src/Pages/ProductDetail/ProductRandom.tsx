import { useEffect, useState } from 'react'
import { getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { ProductCard } from '../../components/ProductCard'
import { StyledGrid } from './styled'

type Props = {
  id: string
  count?: number
}

export const ProductRandom = ({ id, count }: Props) => {
  const [randomProducts, setRandomProducts] = useState<ProductDto[]>()

  useEffect(() => {
    getRandomProducts(id, count).then(setRandomProducts)
  }, [])

  return (
    <StyledGrid>
      {randomProducts?.map((r) => (
        <ProductCard
          size="sm"
          imgSrc={r.imageUrl}
          linkUrl={`../products/${r.id}`}
          name={r.name}
          rating={r.rating}
          price={r.price}
        />
      ))}
    </StyledGrid>
  )
}
