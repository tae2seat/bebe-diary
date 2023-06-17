import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GotoButton({link, buttonText}) {

    const navigate = useNavigate();

    const handleClickGotoButton = () => {
        navigate(link)
    }

    return (
        <button 
            className='bg-red-50 hover:bg-slate-100 text-lg text-semibold text-black hover:text-white rounded-full px-4 py-1 truncate'
            onClick={handleClickGotoButton}
        >
           {buttonText}
        </button>
    );
}


