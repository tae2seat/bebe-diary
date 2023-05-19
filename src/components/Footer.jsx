import React from 'react';
import Lottie from 'lottie-react';
import babyFoot from "../lottie/baby foot.json";

export default function Footer() {
    return (
        <div className='w-full h-20 bg-yellow-100 '>
            <div className='flex items-center h-20 w-20 rotate-90 '>
                <Lottie animationData={babyFoot} />
            </div>
        </div>
    );
}

