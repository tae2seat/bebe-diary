import React from 'react';

export default function TagButton({buttonText, onClick}) {
    return (
        <button type="button" onClick={onClick} className='rounded-t-xl bg-red-100 w-36 h-8 text-lg text-gray-600'>
            {buttonText}
        </button>
    );
}

