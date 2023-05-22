import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GotoButton({link, buttonText}) {

    const navigate = useNavigate();

    const handleClickGotoButton = () => {
        navigate(link)
    }

    return (
        <button className='flex justify-center items-center gap-2.5 px-10 py-[30px] rounded-full bg-[#1e1e1e]' onClick={handleClickGotoButton}>
            <p className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-right text-[#fff0f0]'>{buttonText}</p>
        </button>
    );
}


