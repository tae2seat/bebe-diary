import React from 'react';

export default function TagDetail({tagValue, diary}) {
    switch (tagValue) {
        case 2 : 
        return (
            <div>
                <div>
                    <label>아기 몸무게 :</label>
                    <div>
                        <p>{diary.weight}</p>
                        <p>Kg</p>
                    </div>
                </div>
                <div>
                    <label>아기 키 :</label>
                    <div>
                        <p>{diary.height}</p>
                        <p>cm</p>
                    </div>
                </div>
            </div>
        )
        case 3 : 
        return (
            <div>
                <label>장보기 List</label>
                <div>
                    <p>{diary.content}</p>
                </div>
            </div>
        )
        default :
        return (
            <div  className='flex flex-col w-full h-full'>
                <label className='flex justify-start items-center w-full h-10 text-base'>아기 일상 다이어리</label>
                <div  className='w-full text-base' >
                    <p>{diary.content}</p>
                </div>
            </div>
        )
    
    }
}

