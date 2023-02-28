import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type ProductsState = {
  productsList: ProductDto[]
  randomProducts: ProductDto[]
  productDetail: ProductDto | null
  filteredProductsByTag: ProductDto[]
}

const initialState: ProductsState = {
  productsList: [],
  productDetail: null,
  randomProducts: [],
  filteredProductsByTag: []
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
    },
    fetchRandomProducts: (state, action: PayloadAction<ProductDto[]>) => {
      state.randomProducts = action.payload
    },
    fetchFilteredProduct: (state, action: PayloadAction<ProductDto[]>) => {
      state.filteredProductsByTag = action.payload
    }
  }
})

export const productsReducer = productsSlice.reducer
export const productsActions = productsSlice.actions
