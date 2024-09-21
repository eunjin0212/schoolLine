import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
