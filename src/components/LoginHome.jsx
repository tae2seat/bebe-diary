import React, { useState } from 'react';
import '../pages/Home.css'
import BabyProfileCard from './Cards/BabyProfileCard';
import ProfileCard from './Cards/ProfileCard';
import { Link, useParams } from 'react-router-dom';
import baby from '../images/ICON_11.png';

export default function LoginHome() {

    const { id } = useParams()

    const [isSignUp, setIsSignUp] = useState(true)

    const handleSignUpClick = () => {
        setIsSignUp(true);
      };
    
      const handleSignInClick = () => {
        setIsSignUp(false);
      };

    return (
        <div className='container'>
            <div className='flex justify-end gap-4 py-4 mr-8 md:mr-12'>
                <Link to='/new'>
                    <span>New Diary</span>
                </Link>
                <Link to='/diaries'>
                    <span>Diray List</span>
                </Link>
                <Link to={`/profile/${id}/edit`}>
                    <span>Profile Edit</span>
                </Link>
            </div>
            <div className='container'>
                <div className='welcome'>
                    <div 
                        className={`pinkbox ${isSignUp ? 'signup' : 'signin'}`}
                        style={{ transform: isSignUp ? 'translateX(80%)' : 'translateX(0%)' }}
                    >
                        <div className={`signup ${isSignUp ? '' : 'nodisplay'}`}>
                            <ProfileCard />
                        </div>
                        <div  className={`signin ${isSignUp ? 'nodisplay' : ''}`}>
                           <BabyProfileCard />
                        </div>
                    </div>
                    <div className='leftbox'>
                        <h2 className="title">
                            <span>BLOOM</span>&<br></br>BOUQUET
                        </h2>
                        <p className="desc">Pick your perfect <span>bouquet</span></p>
                        <img className="flower smaller" src={baby} alt="baby" border="0"></img>
                        <p className='account'>have an account?</p>
                        <button className='button' id='signin' onClick={handleSignInClick}>go to babyProfile</button>
                    </div>
                    <div className='rightbox'>
                        <h2 className="title">
                            <span>BLOOM</span>&<br></br>BOUQUET
                        </h2>
                        <p className="desc">Pick your perfect <span>bouquet</span></p>
                        <img className="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
                        <p className="account">don't have an account?</p>
                        <button className="button" id="signup" onClick={handleSignUpClick}>go to userprofile</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

