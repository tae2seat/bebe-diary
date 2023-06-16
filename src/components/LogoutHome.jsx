import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import baby from '../images/baby_01.png';

export default function LogoutHome() {

  
    return (
            <div className='bg-[#CBC0D3]'>



                <div className='relative mx-auto w-[650px] h-[550px]'>
                    <div className='absolute bg-white w-full h-[415px] top-[25%] rounded-lg shadow-md'>
                        <div style={{}} className='absolute w-[320px] h-[500px] -top-[10%] left-[5%] bg-[#EAC7CC] rounded-lg shadow-lg transition-all duration-500 ease-in-out z-2'>
                        
                        
                        
                            <div className='hidden transition-all duration-500 ease-in-out'>
                                <h1 className='text-center mt-24 uppercase text-white text-2xl tracking-wider'>register</h1>
                                <form className='flex items-center flex-col pt-7'>
                                    <input type='text' placeholder='username' className='bg-pale w-65 text-pink border-b border-white/50 py-2 px-3 my-2 placeholder-white text-lg font-thin focus:outline-none focus:border-pink transition-all duration-800'/>
                                    <input type='email' placeholder='email' />
                                    <input type='password' placeholder='password' />
                                    <input type='text' placeholder='gender'/>
                                    <input type='date'/>
                                    <button>create account</button>
                                </form>
                            </div>



                        </div>
                    </div>
                </div>







            </div>















        
       
    );
}

