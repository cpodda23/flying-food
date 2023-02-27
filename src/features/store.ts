import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './products/reducer'

const rootReducer = {
  products: productsReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
