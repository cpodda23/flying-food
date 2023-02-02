import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Cart } from './Pages/Cart'
import { NotFound } from './Pages/NotFound'
import { ProductDetail } from './Pages/ProductDetail'
import { Products } from './Pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

function App() {
  return (
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
  )
}

export default App
