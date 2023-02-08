import { apiClient } from './client'
import { CreateOrderRes, DeliveryDto, OrderDto, ProductDto, TagDto } from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getTags = () => apiClient.get<TagDto[]>('tags')

export const getProductsById = (id: string) => apiClient.get<ProductDto>(`products/${id}`)

export const getTagsById = (id: string) => apiClient.get<TagDto>(`tags/${id}`)

export const getRandomProducts = (id: string, count?: number) => {
  const query = count ? `productId=${id}&count=${count}` : `productId=${id}&count=4`
  return apiClient.get<ProductDto[]>(`products/random?${query}`)
}

export const getDeliveries = () => apiClient.get<DeliveryDto>('deliveries')

export const createOrder = (body: OrderDto) =>
  apiClient.post<CreateOrderRes>('order', body)
