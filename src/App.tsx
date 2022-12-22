import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound'
import { ProductDetail } from './Pages/ProductDetail'
import { Products } from './Pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

// import { Text } from './componentss/Text'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:id',
    element: <ProductDetail />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
