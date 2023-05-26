import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="flex flex-col w-full  bg-purple-100"> 
      <Navbar />      
      <div className="bg-green-100 w-full">
        <Outlet />
      </div>  
    </div>
  )
}

export default App
