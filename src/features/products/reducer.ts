import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type ProductsState = {
  products: ProductDto[]
}

const initialState: ProductsState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsSuccess: (state, action: PayloadAction<ProductDto[]>) => {
      state.products = action.payload
    }
  }
})

export const productsReducer = productsSlice.reducer
export const productsActions = productsSlice.actions
