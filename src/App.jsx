import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import BabyProfile from "./components/BabyProfile"
import Footer from "./components/Footer"

function App() {

  const isLoggedIn = useSelector((state) => state.auth)

  return (
    <div height='100vh' width='full'> 
      <Navbar />      
     <div className="flex justify-center items-center w-full h-[80hv] gap-10 p-10 ">
        <Outlet />  
        { isLoggedIn && <BabyProfile /> }
     </div>
      <Footer />
    </div>
  )
}

export default App
