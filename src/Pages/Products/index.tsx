import { useEffect, useState } from 'react'
import { getProducts, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Button } from '../../components/Button/Button'
import { Loading } from '../../components/Loading'
import { ProductCard } from '../../components/ProductCard'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { StyledGrid, StyledProducts } from './styled'

export const Products = () => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [tags, setTags] = useState<TagDto[]>()
  const [tagFilter, setTagFilter] = useState('')
  /* const [loading, setLoading] = useState(false)
  
    useEffect(() => {
    setLoading(true)
    Promise.all([getProducts(), getTags()])
      .then(([p, t]) => {
        setProducts(p)
        setTags(t)
      })
      .then(() => setLoading(false))
  }, []) */

  useEffect(() => {
    getProducts().then(setProducts)
    getTags().then(setTags)
  }, [])

  const filteredProducts = tagFilter
    ? products?.filter((product) => product.tags.some((tag) => tag === tagFilter))
    : products

  return (
    //  gestire loading senza stato loading
    products && tags ? (
      <StyledProducts>
        <Stack gap={50}>
          <SectionTitle main="our" secondary="production" />
          <Stack>
            {tags.map((tag) => (
              <Button
                key={tag.id}
                bgColor="textInverse"
                onClick={() => setTagFilter(tag.id)}
              >
                {tag.name}
              </Button>
            ))}
          </Stack>
          <Button outlined bgColor="background">
            go to catalog
          </Button>
        </Stack>
        <StyledGrid>
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imgSrc={product.imageUrl}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </StyledGrid>
      </StyledProducts>
    ) : (
      <Loading />
    )
  )
}
