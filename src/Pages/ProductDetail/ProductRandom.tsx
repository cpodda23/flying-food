import { useEffect, useState } from 'react'
import { getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { ProductCard } from '../../components/ProductCard'
import { Stack } from '../../components/Stack'

type Props = {
  id: string
  count?: number
}

export const ProductRandom = ({ id, count }: Props) => {
  const [randomP, setRandomP] = useState<ProductDto[]>()

  useEffect(() => {
    getRandomProducts(id, count).then((p) => setRandomP(p))
  }, [])

  return (
    <Stack direction="vertical">
      {randomP?.map((r) => (
        <ProductCard
          size="sm"
          imgSrc={r.imageUrl}
          linkUrl={`${r.id}`}
          name={r.name}
          rating={r.rating}
          price={`${r.price.type} ${r.price.value}`}
        />
      ))}
    </Stack>
  )
}
