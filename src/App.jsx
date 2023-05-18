import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import BabyProfile from "./components/BabyProfile"

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div> 
      <Navbar />
      <div className="flex w-full h-[600px] p-10 gap-5">
        <div className="w-2/3 bg-yellow-200 p-10">
          <Outlet />
        </div>
        { isLoggedIn ? 
          <div className="w-1/3 bg-blue-200 p-10">
            <BabyProfile />
          </div> :
          null 
        }
      </div>
    </div>
  )
}

export default App
