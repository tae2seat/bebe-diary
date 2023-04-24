import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="w-full h-full "> 
      <Navbar />
      <div className="bg-red-200 h-[920px]">
        <Outlet />  
      </div>
    </div>
  )
}

export default App
