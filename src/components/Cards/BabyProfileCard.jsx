import React from 'react';
import imagePlus from '../../images/image-plus.png';


export default function BabyProfileCard() {
    return (
        <div className='flex flex-col justify-between items-center gap-4 w-[350px] h-[366px] rounded-3xl bg-[#fff0f0]/20'>
            <div className=' flex justify-center mt-10 bg-white'>
                <img className='flex justify-center items-center w-[180px] h-[240px]' />
            </div>
            <div className=' flex justify-end items-center w-[280px] h-[50px] pb-10'>
                <img src={imagePlus} alt='imagePlus' className='flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full p-3' />
            </div>
        </div>
    );
}

