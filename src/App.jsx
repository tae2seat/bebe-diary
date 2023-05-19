import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import BabyProfile from "./components/BabyProfile"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {


  return (
    <div height='100vh' width='full'> 
      <Navbar />      
     <div className="flex justify-center items-center w-full h-[80hv] gap-10 p-10 ">
        <Outlet />  
        <BabyProfile />
     </div>
      <Footer />
    </div>
  )
}

export default App
