import React from 'react';
import { Link } from 'react-router-dom';
import baby from '../images/baby_01.png';

export default function LogoutHome() {
    return ( 
        <div className='flex justify-center py-40'>
            <div className='flex flex-col justify-around items-center w-3/5 h-80'>
                <p className='flex justify-center items-center w-full h-16 text-5xl py-16 mt-4'>Write your Diary with baby</p>
                <p className='flex justify-center items-center  w-full h-10 text-lg py-4'>아이와 함께 여러분의 일상을 기록하세요!</p>
                <Link to='/login' className='flex justify-center items-center w-48 h-16 rounded-2xl text-2xl bg-white mb-4 border-2 border-slate-200 hover:bg-red-100'>지금 시작하기 👉🏻 </Link>
            </div>
            <div className='flex justify-start items-center w-2/5 h-80'>
                <img src={baby} alt='baby' className='  bg-white ml-20 mt-16 animate-bounce' />
            </div> 
        </div>
    );
}

