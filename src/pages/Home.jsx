import React from 'react';
import { useSelector } from 'react-redux';
import LoginHome from '../components/LoginHome';
import LogoutHome from '../components/LogoutHome';
import './Home.css' 


export default function Home() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
        <div className='container'>
            <div className='welcome'>


                <div className='pinkbox'>
                    <div className='signup nodisplay'>
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

                    <div className='signin'>
                        <h1>sign in</h1>
                        <form className='more-padding'>
                            <input type='email' placeholder='email' />
                            <input type='password' placeholder='password' />
                            <button className='button submit'>login</button>
                        </form>
                    </div>
                </div>


                <div className='leftbox'>
                    <h2 className="title"><span>BLOOM</span>&<br></br>BOUQUET</h2>
                    <p className="desc">Pick your perfect <span>bouquet</span></p>
                    <img className="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0"></img>
                    <p className='account'>have an account?</p>
                    <button className='button' id='signin'>login</button>
                </div>
                <div className='rightbox'>
                    <h2 className="title"><span>BLOOM</span>&<br></br>BOUQUET</h2>
                    <p className="desc">Pick your perfect <span>bouquet</span></p>
                    <img className="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
                    <p className="account">don't have an account?</p>
                    <button className="button" id="signup">sign up</button>
                </div>



            </div>
        </div>
    );
    
}

{/* <>
        { isLoggedIn ? <LoginHome /> : <LogoutHome /> }
        </> */}


       