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
        <div className='bg-blue-100 w-2/3 h-[70vh] rounded-2xl'>
            <h1 className='flex items-center w-full h-10 text-xl'>다이어리 기록하기</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-items-center bg-gray-100 '>
                <div className='flex items-center w-full h-10'>
                    <label className='flex items-center text-lg pr-2'>제목 :</label>
                    <input type='text' onChange={handleChangeTitle} className=''/>
                </div>
                <div className=''>
                    <label className=''>오늘의 날짜는?</label>
                    <input type='date' onChange={handleChangeDate} className=' '/>
                </div>
                <div className=''>
                    <div className=' '>
                        <TagButton onClick={() => handleTagValue(1)} buttonText='하루다이어리' />
                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트' />
                    </div>
                    <div className=''>
                        <TagInfo tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                    </div>
                </div>
                <div className=''>
                    <button className='  '> 다이어리 저장하기</button>   
                </div>               
            </form>
        </div>
        
    );
}

