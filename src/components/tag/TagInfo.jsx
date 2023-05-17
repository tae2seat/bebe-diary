import React from 'react';

export default function TagInfo({tagValue, setWeight, weight, setHeight, height, setContent, content, setText, text}) {

    const handleChangeWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleChangeHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }


    switch (tagValue) {
        case 2 : 
        return (
            <div className='flex flex-col w-full h-96 '>
                <div className='w-full h-1/2' >
                    <label className='flex justify-center items-center w-full h-10  border-b-2 border-red-100'>아기 몸무게 :</label>
                    <div className='flex justify-center items-center w-full h-10 '>
                        <input type='text' onChange={handleChangeWeight} className='w-1/3 h-10 text-lg'/> 
                        <span className='text-base'>Kg</span>
                    </div>
                </div>
                <div className='w-full h-1/2'>
                    <label className='flex justify-center items-center w-full h-10  border-b-2 border-red-100'>아기 키 :</label>
                    <div className='flex justify-center items-center w-full h-10'>
                        <input type='text' onChange={handleChangeHeight} className='w-1/3 h-10 text-lg'/> 
                        <span className='tex-base'>cm</span>
                    </div>
                </div>
            </div>
        )
        case 3 : 
        return (
            <div className='flex flex-col w-full h-96' >
                <label className='flex justify-center items-center w-full h-10  border-b-2 border-red-100'>장보기 List</label>
                <textarea type='text' onChange={handleChangeText} className='w-full h-full' />
            </div>
        )
        default :
        return (
            <div className='flex flex-col w-full h-96'>
                <label className='flex justify-center items-center w-full h-10  border-b-2 border-red-100'>엄마와 아기의 일상을 기록해주세요~</label>
                <textarea type='text' onChange={handleChangeContent} className='w-full h-full p-2'  />
            </div>
        )
    
    }
}

