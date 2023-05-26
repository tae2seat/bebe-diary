import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="flex flex-col w-full h-full "> 
      <Navbar />      
      <div className="bg-green-100 w-full h-full">
        <Outlet />
      </div>  
    </div>
  )
}

export default App
