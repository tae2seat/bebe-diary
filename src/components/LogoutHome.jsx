import React, { useState } from 'react'
import '../pages/Home.css'
import RegisterCard from './Cards/RegisterCard'
import LoginCard from './Cards/LoginCard'
import Lottie from 'lottie-react'
import baby from '../lottie/baby-face.json'

export default function LogoutHome() {
  const [isSignUp, setIsSignUp] = useState(true)

  const handleSignUpClick = () => {
    setIsSignUp(true)
  }

  const handleSignInClick = () => {
    setIsSignUp(false)
  }

  return (
    <div className="flex flex-col h-[500px] 2xl:h-[700px] items-center justify-center">
      <div className="relative md:mt-20 ">
        <div className="w-[600px] h-[380px] bg-[#F6F6F6] shadow-2xl rounded-lg ">
          <div
            className={` absolute -top-8 left-7 w-[300px] h-[450px]  bg-[#EAC7CC] shadow-2xl rounded-lg transition-all z-10 ${
              isSignUp ? 'signup' : 'signin'
            }`}
            style={{
              transform: isSignUp ? 'translateX(80%)' : 'translateX(0%)',
            }}
          >
            <div className={`signup ${isSignUp ? '' : 'nodisplay'}`}>
              <RegisterCard setIsSignUp={setIsSignUp} />
            </div>
            <div className={`signin ${isSignUp ? 'nodisplay' : ''}`}>
              <LoginCard />
            </div>
          </div>
          <div className="absolute flex flex-col items-center w-1/2 transition-all left-0 gap-1 mt-2 ">
            <h2 className="title">
              <span>HELLO</span>!<br></br>MY BABY
            </h2>
            <p className="desc">
              Baby & Mom <span>Story Book</span>
            </p>
            <Lottie className="w-36 h-36" animationData={baby} />
            <p className="text-xs">have an account?</p>
            <button className="button" id="signin" onClick={handleSignInClick}>
              login
            </button>
          </div>
          <div className="absolute flex flex-col items-center w-1/2 transition-all right-0 gap-1 mt-2">
            <h2 className="title">
              <span>HELLO</span>!<br></br>MY BABY
            </h2>
            <p className="desc">
              Baby & Mom <span>Story book</span>
            </p>
            <Lottie className="w-36 h-" animationData={baby} />
            <p className="text-xs">don't have an account?</p>
            <button className="button" id="signup" onClick={handleSignUpClick}>
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
