import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GotoButton({link, buttonText}) {

    const navigate = useNavigate();

    const handleClickGotoButton = () => {
        navigate(link)
    }

    return (
        <button className='w-32 h-10 bg-red-200 rounded-md  text-lg' onClick={handleClickGotoButton}>
            {buttonText}
        </button>
    );
}


