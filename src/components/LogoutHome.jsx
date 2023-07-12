import React, { useState } from 'react';
import '../pages/Home.css'
import RegisterCard from './Cards/RegisterCard';
import LoginCard from './Cards/LoginCard';
import Lottie from 'lottie-react'
import baby from '../lottie/baby-face.json'

export default function LogoutHome() {

    const [isSignUp, setIsSignUp] = useState(true)

    const handleSignUpClick = () => {
        setIsSignUp(true);
      };
    
      const handleSignInClick = () => {
        setIsSignUp(false);
      };
  
    return (
        <div className='container'>
            <div className='welcome'>
                <div 
                    className={`pinkbox ${isSignUp ? 'signup' : 'signin'}`}
                    style={{ transform: isSignUp ? 'translateX(80%)' : 'translateX(0%)' }}
                >
                    <div className={`signup ${isSignUp ? '' : 'nodisplay'}`}>
                        <RegisterCard />
                    </div>
                    <div  className={`signin ${isSignUp ? 'nodisplay' : ''}`}>
                        <LoginCard />
                    </div>
                </div>
                <div className='leftbox'>
                    <h2 className="title">
                        <span>HELLO</span>!<br></br>MY BABY
                    </h2>
                    <p className="desc">Baby & Mom <span>Story Book</span></p>
                    <Lottie className='lottie' animationData={baby} />
                    <p className='account'>have an account?</p>
                    <button className='button' id='signin' onClick={handleSignInClick}>login</button>
                </div>
                <div className='rightbox'>
                    <h2 className="title">
                        <span>HELLO</span>!<br></br>MY BABY
                    </h2>
                    <p className="desc">Baby & Mom <span>Story book</span></p>
                    <Lottie className='lottie' animationData={baby} />
                    <p className="account">don't have an account?</p>
                    <button className="button" id="signup" onClick={handleSignUpClick}>sign up</button>
                </div>
            </div>
        </div>
    );
}

