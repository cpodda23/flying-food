import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { cartReducer } from './cart/reducer'
import { productsReducer } from './products/reducer'
import { productsSaga } from './products/sagas'
import { tagsReducer } from './tags/reducer'
import { tagsSaga } from './tags/sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = {
  products: productsReducer,
  tags: tagsReducer,
  cart: cartReducer
}

function* rootSaga() {
  yield all([productsSaga(), tagsSaga()])
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}

sagaMiddleware.run(rootSaga)
