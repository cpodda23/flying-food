import { call, put, takeLatest } from 'redux-saga/effects'
import { getProducts, getProductsById } from '../../api'
import { ProductDto } from '../../api/types'
import { productsActions } from './reducer'

function* fetchProducts() {
  const products: ProductDto[] = yield call(getProducts)
  yield put(productsActions.fetchProductsSuccess(products))
}

function* fetchProductsById(
  action: ReturnType<typeof productsActions.fetchProductsById>
) {
  const product: ProductDto = yield call(getProductsById, action.payload)
  yield put(productsActions.fetchProductDetailSuccess(product))
}

export function* productsSaga() {
  yield takeLatest(productsActions.fetchProducts.toString(), fetchProducts)
  yield takeLatest(productsActions.fetchProductsById.toString(), fetchProductsById)
}
