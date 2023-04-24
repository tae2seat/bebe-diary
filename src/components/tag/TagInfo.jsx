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
            <div className='flex flex-col w-full h-full'>
                <div >
                    <label className='flex justify-center items-center w-full h-10 text-lg'>아기 몸무게 :</label>
                    <div>
                        <input type='text' onChange={handleChangeWeight}/> 
                        <span>Kg</span>
                    </div>
                </div>
                <div>
                    <label className='flex justify-center items-center w-full h-10 text-lg'>아기 키 :</label>
                    <div>
                        <input type='text' onChange={handleChangeHeight}/> 
                        <span>cm</span>
                    </div>
                </div>
            </div>
        )
        case 3 : 
        return (
            <div className='flex flex-col w-full h-full' >
                <label className='flex justify-center items-center w-full h-10 text-lg'>장보기 List</label>
                <textarea type='text' onChange={handleChangeText} className='w-full h-[500px] text-lg' />
            </div>
        )
        default :
        return (
            <div className='flex flex-col w-full h-full'>
                <label className='flex justify-center items-center w-full h-10 text-lg'>엄마와 아기의 일상을 기록해주세요~</label>
                <textarea type='text' onChange={handleChangeContent} className='w-full h-[500px] text-lg'  />
            </div>
        )
    
    }
}

