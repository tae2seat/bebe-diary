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
            <div>
                <div>
                    <label>아기 몸무게 :</label>
                    <div>
                        <input type='text' onChange={handleChangeWeight}/> 
                        <p>Kg</p>
                    </div>
                </div>
                <div>
                    <label>아기 키 :</label>
                    <div>
                        <input type='text' onChange={handleChangeHeight}/> 
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
                    <input type='text' onChange={handleChangeText} />
                </div>
            </div>
        )
        default :
        return (
            <div>
                <label>아기 일상 다이어리</label>
                <div>
                    <input type='text' onChange={handleChangeContent} />
                </div>
            </div>
        )
    
    }
}

