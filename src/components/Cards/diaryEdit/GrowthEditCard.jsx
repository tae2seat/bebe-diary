import React from 'react';

export default function GrowthEditCard({ diary, setWeight, setHeight}) {
    
    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }

    return (
        <div className='bg-gray-100 h-44 rounded-2xl md:mt-36'>
            <h1>성장 다이어리</h1>
            <div className='flex justify-center items-center mx-6 mt-1'>
                <label className='w-12 text-right'>몸무게 :</label>
                <input 
                    type='text' 
                    name='weight'
                    defaultValue={diary?.weight}
                    onChange={handleWeightChange}
                    /> 
                <span className=''>Kg</span>
            </div>
            <div className='flex justify-center items-center mx-6'>
                <label className='w-12 text-right'>키 :</label>
                <input 
                    type='text' 
                    name='height'
                    defaultValue={diary?.height}
                    onChange={handleHeightChange} 
                /> 
                <span className=''>cm</span>
            </div>
        </div>
    );
}

