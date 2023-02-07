import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById, getTagsById } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { ProductSelected } from '../../components/ProductSelected'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { StyledProductDetail } from './styled'

export const ProductDetail = () => {
  const params = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductDto>()
  const [tags, setTags] = useState<TagDto>()

  useEffect(() => {
    getProductsById(params.id!).then(setProduct)
    // getTagsById(product?.tags.map((tag) => tag) ? tags : '').setTags(tags)
  }, [])

  if (!product) {
    return <Loading />
  }

  return (
    <StyledProductDetail>
      <ProductSelected
        // productTag={tags}
        imgSrc={product.imageUrl}
        description={product.description}
        productName={product.name}
        stars={product.rating}
      />

      <Stack direction="horizontal">
        <Button
          bgColor="backgroundDark"
          color="textInverse"
          icon="bagShopping"
          iconBgColor="primary"
        >
          add to cart
        </Button>
        <QuantitySelector />
      </Stack>
    </StyledProductDetail>
  )
}

// aggiungere api getProduct by id e random (prodotto da non visualizzare e numero di prodotti da visualizzare)
// accedo al prodotto by id cliccando sulla ProductCard (ma non sul button del carrello)
