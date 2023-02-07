import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../api'
import { ProductDto } from '../../api/types'
import { Loading } from '../../components/Loading'
import { ProductCard } from '../../components/ProductCard'

export const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState<ProductDto>()
  console.log(params)

  useEffect(() => {
    getProductsById('00b59df6-9705-43b7-ab47-783520812668').then(setProduct)
  }, [])
  if (!product) {
    return <Loading />
  }
  return (
    <div>
      <ProductCard
        name={product.name}
        rating={product.rating}
        price={`${product.price.type} ${product.price.value}`}
        imgSrc={product.imageUrl}
      />
    </div>
  )
}

// aggiungere api getProduct by id e random (prodotto da non visualizzare e numero di prodotti da visualizzare)
// accedo al prodotto by id cliccando sulla ProductCard (ma non sul batton del carrello)
