import React from 'react';

export default function LogButton({onClick, text}) {
    return (
        <button onClick={onClick} className=' bg-[#1E1E1E] hover:bg-slate-100 text-xl text-semibold text-white hover:text-black rounded-full px-5 py-2 truncate
        ' >
            {text}
        </button>
    );
}

