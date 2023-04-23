import React, { useState } from 'react';
import TagButton from '../../components/tag/TagButton';
import TagInfo from '../../components/tag/TagInfo';
import { loggedApi } from '../../axios';

export default function NewDiary() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [text, setText] = useState('')
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleTagValue = (tagValue) => {
        setTagValue(tagValue)
    }

    const [tagValue, setTagValue] = useState(1)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loggedApi.post('/',{
                title,
                weight,
                height,
                content
            })
            console.log('성공~!!!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <h1>다이어리 새로쓰기</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목 : </label>
                    <input type='text' onChange={handleChangeTitle}  />
                </div>
                <div>
                    <label>오늘의 날짜는?</label>
                    <input type='date' onChange={handleChangeDate} />
                </div>
                <div>
                    <div>
                        <TagButton onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                    </div>
                    <div>
                        <TagInfo tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                    </div>
                </div>
                <div>
                    <button>다이어리 저장하기</button>
                </div>
            </form>
        </div>
    );
}

