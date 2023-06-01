import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="flex flex-col w-full h-full "> 
      <Navbar />      
      <div className="bg-green-100 w-full">
        <Outlet />
      </div>  
      <Footer />
    </div>
  )
}

export default App
