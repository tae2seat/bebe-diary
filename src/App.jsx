import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: 'calc-(100vh - 230px)' }} className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
