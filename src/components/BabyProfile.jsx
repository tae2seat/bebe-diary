import React from 'react';
import Lottie from 'lottie-react';
import babyFace from '../lottie/baby-face.json';


export default function BabyProfile() {
    return (
        <div className='flex flex-col w-1/4 h-[70vh] justify-around items-center rounded-2xl'>
            <div className='flex justify-center items-center bg-white w-full h-2/3 rounded-t-2xl border-blue-200 border-2'>
                <Lottie animationData={babyFace} />
            </div>
            <div className='flex flex-col justify-between bg-blue-100 w-full h-1/3 px-5 py-2 gap-2 border-x-2 border-b-2 border-blue-200 rounded-b-2xl'>
                <h1 className='text-2xl'>콩콩이</h1>
                <p className='text-lg'>2023년 11월 12일</p>
                <p className='text-lg'>D-Day : -150일 </p>
                <p className='text-lg'>16주 4일</p>
            </div>
        </div>
    );
}

