import { apiClient } from './client'
import { CreateOrderRes, DeliveryDto, OrderDto, ProductDto, TagDto } from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getTags = () => apiClient.get<TagDto[]>('tags')

export const getProductsById = (id: string) => apiClient.get<ProductDto>(`products/${id}`)

export const getRandomProducts = (id: string, count = 4) => {
  const query = new URLSearchParams({ id, count: count.toString() })
  return apiClient.get<ProductDto[]>(`products/random?${query}`)
}

export const getDeliveries = () => apiClient.get<DeliveryDto>('deliveries')

export const createOrder = (body: OrderDto) =>
  apiClient.post<CreateOrderRes>('order', body)
