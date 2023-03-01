import { RootState } from '../store'

export const selectProducts = (state: RootState) => state.products.productsList

export const selectProductDetail = (state: RootState) => state.products.productDetail

export const selectRandomProducts = (state: RootState) => state.products.randomProducts

// export const selectFilteredProducts = (state: RootState) =>
//   selectedTag
//     ? state.products.productsList.filter((product) =>
//         product.tags.some((tag) => tag === selectedTag)
//       )
//     : state.products.productsList
