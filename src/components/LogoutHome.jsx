import React, { useState } from 'react';
import '../pages/Home.css'

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
                        <h1>register</h1>
                        <form autoComplete='off'>
                            <input type='text' placeholder='username' />
                            <input type='email' placeholder='email' />
                            <input type='password' placeholder='password' />
                            <input type='text' placeholder='gender' />
                            <input type='date' />
                            <button className='button submit'>create account</button>
                        </form>
                    </div>
                    <div  className={`signin ${isSignUp ? 'nodisplay' : ''}`}>
                        <h1>sign in</h1>
                        <form className='more-padding'>
                            <input type='email' placeholder='email' />
                            <input type='password' placeholder='password' />
                            <button className='button submit'>login</button>
                        </form>
                    </div>
                </div>
                <div className='leftbox'>
                    <h2 className="title">
                        <span>BLOOM</span>&<br></br>BOUQUET
                    </h2>
                    <p className="desc">Pick your perfect <span>bouquet</span></p>
                    <img className="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0"></img>
                    <p className='account'>have an account?</p>
                    <button className='button' id='signin' onClick={handleSignInClick}>login</button>
                </div>
                <div className='rightbox'>
                    <h2 className="title">
                        <span>BLOOM</span>&<br></br>BOUQUET
                    </h2>
                    <p className="desc">Pick your perfect <span>bouquet</span></p>
                    <img className="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
                    <p className="account">don't have an account?</p>
                    <button className="button" id="signup" onClick={handleSignUpClick}>sign up</button>
                </div>
            </div>
        </div>
    );
}

