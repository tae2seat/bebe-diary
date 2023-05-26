import React from 'react';

export default function NavbarCard({text}) {


    return (
        <div className='flex justify-center items-center w-[800px] h-14 gap-2 px-8 py-6 rounded-full bg-[#1e1e1e]/5' >
            <p className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center text-[#231f20]'>{text}</p>
        </div>
    );
}

