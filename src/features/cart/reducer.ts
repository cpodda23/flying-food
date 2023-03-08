import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductDto } from '../../api/types'

type CartState = {
  products: CartProduct[]
}

type CartProduct = { product: ProductDto; q: number }

const initialState: CartState = {
  products: []
}

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.products.push(action.payload)
    }
    // removeFromCart: (state, action: PayloadAction<ProductDto>) => {
    //   delete state.products
    // }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
