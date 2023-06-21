import React from 'react';

export default function CheckCard() {
    return (
        <div className='flex flex-col bg-gray-100 h-60 rounded-2xl'>
            <h1>check list</h1>
            <label className=''>병원 진료 및 검사를 기록하고 관리해보세요~!</label>
            <input type='checkbox' />
        </div>
    );
}

