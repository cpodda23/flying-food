import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound'
import { ProductDetail } from './Pages/ProductDetail'
import { Products } from './Pages/Products'

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
  return <RouterProvider router={router} />
}

export default App
