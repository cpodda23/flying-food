import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
import { StyledLayout } from './styled'

export const Layout = () => {
  return (
    <main>
      <Header />
      <StyledLayout>
        <SideBar />
        <div>
          <Outlet />
        </div>
      </StyledLayout>
      <Footer />
    </main>
  )
}
