import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div
      style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '160px' }}
    >
      <Navbar />
      <div style={{ flex: '1 0 auto' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
