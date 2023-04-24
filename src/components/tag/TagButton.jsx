import React from 'react';

export default function TagButton({buttonText, onClick}) {
    return (
        <button type="button" onClick={onClick} className=' rounded-t-md bg-red-100 w-full h-full'>
            {buttonText}
        </button>
    );
}

