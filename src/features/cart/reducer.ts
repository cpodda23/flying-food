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
      const find = state.products.find((p) => p === action.payload)
      if (find) {
        find.q += action.payload.q
      } else {
        state.products.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<CartProduct>) => {
      state.products.filter((product) => product !== action.payload)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
