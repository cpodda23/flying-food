import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type CartState = {
  product: ProductDto | null
}

const initialState: CartState = {
  product: null
}

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDto>) => {
      state.product = action.payload
    }
    // removeFromCart: (state, action: PayloadAction<ProductDto>) => {
    //   delete state.products
    // }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions