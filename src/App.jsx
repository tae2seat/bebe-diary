import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Outlet className="min-h-screen" />
      <Footer />
    </div>
  )
}

export default App
