import { RootState } from '../store'

export const selectCartProducts = (state: RootState) => state.cart.products

// export const selectCartProductQuantity = (state: RootState, id: string) => {
//   const prod = state.cart.products.find((p) => p.product.id === id)
//   return prod?.q
// }

export const selectCartQuantity = (state: RootState) =>
  state.cart.products.reduce((acc, curr) => acc + curr.q, 0)
