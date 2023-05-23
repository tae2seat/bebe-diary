import React from 'react';

export default function TagEdit({tagValue, setWeight,  weight, setHeight, height, setContent, content, setText, text}) {
  
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
            <div>
                <div>
                    <label>아기 몸무게 :</label>
                    <div>
                        <input type='text' onChange={handleChangeWeight} defaultValue={weight}/> 
                        <p>Kg</p>
                    </div>
                </div>
                <div>
                    <label>아기 키 :</label>
                    <div>
                        <input type='text' onChange={handleChangeHeight} defaultValue={height}/> 
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
                    <input type='text' onChange={handleChangeText} defaultValue={text} />
                </div>
            </div>
        )
        default :
        return (
            <div className='flex flex-col w-full h-full'>
                <label className='flex justify-start items-center w-full h-10 text-base'>아기 일상 다이어리</label>
                <textarea type='text' onChange={handleChangeContent} defaultValue={content} className='w-full text-base'  />
                
            </div>
        )
    
    }
}

