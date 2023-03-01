import { call, put, takeLatest } from 'redux-saga/effects'
import { getProducts, getProductsById } from '../../api'
import { ProductDto } from '../../api/types'
import { productsActions } from './reducer'

function* fetchProducts(action: ReturnType<typeof productsActions.fetchProductsSuccess>) {
  const products: ProductDto[] = yield call(getProducts)
  yield put(productsActions.fetchProductsSuccess(products))
}

function* fetchProductsById(
  action: ReturnType<typeof productsActions.fetchProductDetail>
) {
  const product: ProductDto = yield call(getProductsById, action.payload.id)
  yield put(productsActions.fetchProductDetail(product))
}

export function* productsSaga() {
  yield takeLatest(productsActions.fetchProductsSuccess, fetchProducts)
  yield takeLatest(productsActions.fetchProductDetail, fetchProductsById)
}
