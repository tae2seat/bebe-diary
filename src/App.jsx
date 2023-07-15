import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="my-auto">
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  )
}

export default App
