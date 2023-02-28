import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type CartState = {
  products: ProductDto[]
}

const initialState: CartState = {
  products: []
}

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    fetchCartProducts: (state, action: PayloadAction<ProductDto[]>) => {
      state.products = action.payload
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
