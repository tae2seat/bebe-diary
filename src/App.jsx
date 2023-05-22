import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="flex flex-col min-w-1280 max-w-1920"> 
      <Navbar />      
      <Outlet />  
    </div>
  )
}

export default App
