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
            <div className=' '>
                <div className=' '>
                    <label className=''>우리 아이 얼마나 튼튼하게 자랐나 체중을 기록해보아요</label>
                    <div className=''>
                        <input type='text' onChange={handleChangeWeight} className=''/> 
                        <span className=''>Kg</span>
                    </div>
                </div>
                <div className=''>
                    <label className=''>아기 키 :</label>
                    <div className=''>
                        <input type='text' onChange={handleChangeHeight} className=''/> 
                        <span className=''>cm</span>
                    </div>
                </div>
            </div>
        )
        case 3 : 
        return (
            <div className='' >
                <label className=''>병원 진료 및 검사를 기록하고 관리해보세요~!</label>
                <textarea type='text' onChange={handleChangeText} className='' />
            </div>
        )
        default :
        return (
            <div className=''>
                <label className=''>엄마와 아기의 하루를 기록해보세요~!</label>
                <textarea type='text' onChange={handleChangeContent} className=''  />
            </div>
        )
    
    }
}

