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
  }, [id, count])

  return (
    <StyledGrid>
      {randomProducts?.map((r) => (
        <ProductCard
          key={r.id}
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
