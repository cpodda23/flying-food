import { apiClient } from './client'
import { CreateOrderRes, DeliveryDto, OrderDto, ProductDto, TagDto } from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getTags = () => apiClient.get<TagDto[]>('tags')

export const getDeliveries = () => apiClient.get<DeliveryDto>('deliveries')

export const createOrder = (body: OrderDto) =>
  apiClient.post<CreateOrderRes>('order', body)
