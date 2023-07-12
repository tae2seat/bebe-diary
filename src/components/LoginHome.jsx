import React, { useState } from 'react';
import '../pages/Home.css';
import BabyProfileCard from './Cards/BabyProfileCard';
import ProfileCard from './Cards/ProfileCard';
import { Link, useParams } from 'react-router-dom';
import baby1 from '../images/baby_01.png';


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
        <div>
            <nav className='flex justify-end gap-4 py-4 mr-8'>
                <Link to='/new'>
                    <span className='underline' >New Diary</span>
                </Link>
                <Link to='/diaries'>
                    <span className='underline'>Diray List</span>
                </Link>
                <Link to={`/profile/${id}/edit`}>
                    <span className='underline'>Profile Edit</span>
                </Link>
                <Link to={`/baby/${id}/register`}>
                    <span className='underline'>Baby Profile register</span>
                </Link>
            </nav>
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
                            <span>Lovely Day </span><br></br>with <span>You</span>
                        </h2>
                        <p className="desc">Hello My <span>Baby</span></p>
                        <img className='mx-auto my-12 w-32 h-32' src={baby1} alt='baby1'/>
                        <button className='button' id='signin' onClick={handleSignInClick}>go to babyProfile</button>
                    </div>
                    <div className='rightbox'>
                        <h2 className="title">
                            <span>Always </span><br></br>With<span>You</span>
                        </h2>
                        <p className="desc">You make me <span>Happy!</span></p>
                        <img className='mx-auto my-12 w-32 h-32' src={baby1} alt='baby1' />
                        <button className="button" id="signup" onClick={handleSignUpClick}>go to userprofile</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

