import React, { useState } from 'react'
import '../pages/Home.css'
import BabyProfileCard from './Cards/BabyProfileCard'
import ProfileCard from './Cards/ProfileCard'
import baby1 from '../images/baby_01.png'

export default function LoggedHome() {
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
              <ProfileCard />
            </div>
            <div className={`signin ${isSignUp ? 'nodisplay' : ''}`}>
              <BabyProfileCard />
            </div>
          </div>
          <div className="absolute w-1/2 transition-all left-0 ">
            <h2 className="title">
              <span>Lovely Day </span>
              <br></br>with <span>You</span>
            </h2>
            <p className="desc">
              Hello My <span>Baby</span>
            </p>
            <img
              className="mx-auto my-10 w-32 h-32 p-2"
              src={baby1}
              alt="baby1"
            />
            <button className="button" id="signin" onClick={handleSignInClick}>
              go to babyProfile
            </button>
          </div>
          <div className="absolute w-1/2 transition-all right-0">
            <h2 className="title">
              <span>Always </span>
              <br></br>With<span>You</span>
            </h2>
            <p className="desc">
              You make me <span>Happy!</span>
            </p>
            <img
              className="mx-auto my-10 w-32 h-32 p-2"
              src={baby1}
              alt="baby2"
            />
            <button className="button" id="signup" onClick={handleSignUpClick}>
              go to userprofile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
