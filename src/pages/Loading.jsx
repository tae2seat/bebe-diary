import React from 'react';
import Lottie from 'lottie-react';
import babyFoot from '../lottie/baby foot.json';

export default function Loading() {

    return (
        <div className='flex justify-center items-center w-full h-full'>
           <div>
            <Lottie animationData={babyFoot} className=' h-48 w-48' />
            <p className='text-lg py-2 text-red-300'>잠시만 기다려주세요오옹!</p>
           </div>
        </div>
    );
}

