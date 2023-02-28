import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart/reducer'
import { productsReducer } from './products/reducer'
import { tagsReducer } from './tags/reducer'

const rootReducer = {
  products: productsReducer,
  tags: tagsReducer,
  cart: cartReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
