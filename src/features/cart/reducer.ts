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
    addToCart: (state, { payload }: PayloadAction<CartProduct>) => {
      const found = state.products.find((p) => p.product.id === payload.product.id)
      if (found) {
        found.q += payload.q
      } else {
        state.products.push(payload)
      }
    },
    updateQuantity: (state, { payload }: PayloadAction<{ id: string; q: number }>) => {
      const found = state.products.find((p) => p.product.id === payload.id)
      if (found) found.q = payload.q
    },
    incrementQuantity: (state, { payload }: PayloadAction<{ id: string; q: number }>) => {
      const found = state.products.find((p) => p.product.id === payload.id)
      if (found) found.q += payload.q
    },
    decrementQuantity: (state, { payload }: PayloadAction<{ id: string; q: number }>) => {
      const found = state.products.find((p) => p.product.id === payload.id)
      if (found) found.q -= payload.q
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.product.id !== payload)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
