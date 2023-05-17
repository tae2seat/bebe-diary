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
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <h1 className='flex justify-center items-center w-full h-10 px-40 py-8 bg-red-100 border-b-2 border-red-100'>다이어리 새로쓰기</h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-[480px]'>
                <div className=' flex justify-normal items-center gap-2 px-2 w-full h-16'>
                    <label className='text-xl'>제목 :</label>
                    <input type='text' onChange={handleChangeTitle} className='w-5/6 h-10 text-xl'/>
                </div>
                <div className='flex justify-normal items-center gap-2 px-2 w-full h-12'>
                    <label className='text-lg'>오늘의 날짜는?</label>
                    <input type='date' onChange={handleChangeDate} className='w-48 h-4/5 text-lg '/>
                </div>
                <div className='flex flex-col justify-around w-full  py-2 '>
                    <div className='flex justify-around items-end w-full h-12 gap-1 px-1 '>
                        <TagButton onClick={() => handleTagValue(1)} buttonText='하루다이어리' />
                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트' />
                    </div>
                    <div className='flex w-full h-96 border-2 border-red-100'>
                        <TagInfo tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                    </div>
                </div>
                <div className='flex justify-center items-center w-full h-16'>
                    <button className=' w-40 h-10 rounded-2xl bg-white hover:bg-red-100 text-lg '> 다이어리 저장하기</button>   
                </div>               
            </form>






        </div>
        
    );
}

