import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { store } from './features/store'
import { tagsActions } from './features/tags/reducer'
import { useAction } from './hooks/useAction'
import { Cart } from './Pages/Cart'
import { NotFound } from './Pages/NotFound'
import { ProductDetail } from './Pages/ProductDetail'
import { Products } from './Pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

function App() {
  //  useAction(tagsActions.fetchTags(), [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="products" />} />
            <Route path="/" element={<Layout />}>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
