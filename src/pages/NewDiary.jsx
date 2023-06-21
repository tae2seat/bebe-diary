import React, { useEffect, useState } from 'react';
import { loggedApi } from '../axios';
import DailyCard from '../components/Cards/newDiary/DailyCard';
import GrowthCard from '../components/Cards/newDiary/GrowthCard';
import CheckCard from '../components/Cards/newDiary/CheckCard';

export default function NewDiary() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    
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
        <div className='flex flex-col'>
            <div className='flex flex-col md:flex md:flex-row justify-center items-center gap-10'>
                <DailyCard setTitle={setTitle} setDate={setDate} setContent={setContent} />
                <div className='flex flex-col w-96 gap-12 md:gap-6 mb-12 '>
                    <GrowthCard setWeight={setWeight} setHeight={setHeight} />
                    <CheckCard />       
                </div>
            </div>
            <button 
                className='my-1'
                onClick={handleSubmit}
            >다이어리 저장하기</button>
        </div>
        
    );
}
