import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type ProductsState = {
  productsList: ProductDto[]
  productDetail: ProductDto
}

const initialState: ProductsState = {
  productsList: [],
  productDetail: {
    discountRate: 0,
    available: true,
    rating: 0,
    stock: 0,
    delivery: 'string',
    name: '',
    imageUrl: '',
    description: '',
    price: '',
    id: '',
    new: true,
    tags: ''
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsSuccess: (state, action: PayloadAction<ProductDto[]>) => {
      state.productsList = action.payload
    },
    fetchProductDetail: (state, action: PayloadAction<ProductDto>) => {
      state.productDetail = action.payload
    }
  }
})

export const productsReducer = productsSlice.reducer
export const productsActions = productsSlice.actions
