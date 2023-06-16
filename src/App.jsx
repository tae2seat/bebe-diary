import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <div className="flex flex-col 2xl:px-60"> 
      <Navbar />     
      <Outlet />
    </div>
  )
}

export default App
