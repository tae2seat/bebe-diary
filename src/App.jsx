import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Babybar from "./components/tag/Babybar"
import { useSelector } from "react-redux"

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div> 
      <Navbar />
      <div className="flex w-full h-[600px]">
        <div className="w-2/3 bg-yellow-200 p-10">
          <Outlet />
        </div>
        { isLoggedIn ? 
          <div className="w-1/3 bg-blue-200 p-10">
            <Babybar />
          </div> :
          null 
        }
      </div>
    </div>
  )
}

export default App
