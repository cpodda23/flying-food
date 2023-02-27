import { RootState } from '../store'

export const selectProducts = (state: RootState) => state.products.productsList

export const selectProductDetail = (state: RootState) => state.products.productDetail
