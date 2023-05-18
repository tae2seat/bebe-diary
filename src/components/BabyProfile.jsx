import React from 'react';
import Lottie from 'lottie-react';
import babyFace from '../lottie/baby-face.json';


export default function BabyProfile() {
    return (
        <div className='flex flex-col w-full h-full bg-gray-300'>
            <div className='flex justify-center items-center bg-white w-full h-2/3'>
                <Lottie animationData={babyFace} />
            </div>
            <div className='bg-yellow-50 w-full h-1/3'>
                <h1>아기 태명</h1>
                <p>아기 예정일</p>
                <p>디데이</p>
                <p>임신 주수 </p>
            </div>
        </div>
    );
}

