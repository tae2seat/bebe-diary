import React from 'react';
import baby from '../images/baby_02.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NotFound() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
        <div className='w-full h-[720px] flex justify-center items-center  bg-red-100'>  
            <div className='flex flex-col justify-center items-center p-10'>
                <h1 className='flex justify-center items-center text-4xl text-gray-600 py-2'>잘못 들어오셨어요! Home으로 가기 버튼을 눌러주세요!!</h1>
                <Link to={ isLoggedIn ? '/' : '/join'} className='flex justify-center items-center w-1/4 h-10 rounded-md border-2 text-gray-600 border-slate-100 my-6'>
                    <p className='text-base'>Home으로 가기</p>
                </Link>
            </div>
            
            <div className='p-10'>
                <img src={baby} alt='baby'/>
            </div>
        </div>
    );
}

