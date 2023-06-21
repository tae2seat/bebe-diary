import React, { useEffect, useState } from 'react';
import { loggedApi } from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
import CheckDetailCard from '../components/Cards/diaryDetail/CheckDetailCard'
import DailyEditCard from '../components/Cards/diaryEdit/DailyEditCard'
import GrowthEditCard from '../components/Cards/diaryEdit/GrowthEditCard'


export default function DiaryEdit() {

    const {diaryId} = useParams()
    const navigate = useNavigate()

    const [diary, setDiary] = useState(null)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [text, setText] = useState('')

    const getDiary = async () => {
        try {
            const response = await loggedApi.get(`/detail/${diaryId}`)
            setDiary(response.data)
            setTitle(response.data.title)
            setContent(response.data.content)
            setWeight(response.data.weight)
            setHeight(response.data.height)
        } catch (error) {
            console.log(error)
            navigate('/diaries')
        }
    }

    useEffect(() => {
        getDiary()
    },[loggedApi])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loggedApi.put(`/edit/${diaryId}`,{
                title,
                weight,
                height,
                content,
            })
            console.log('성공~!!!')
        } catch (error) {
            console.log(error)
        }
    }

    if(!diary) { 
        return <h1>Loading...</h1>
    }

    return (
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex md:flex-row justify-center items-center gap-10'>
                    <DailyEditCard diary={diary} setTitle={setTitle} setContent={setContent} />
                    <div className='flex flex-col w-96 gap-12 md:gap-6 mb-12 '>
                        <GrowthEditCard diary={diary} setWeight={setWeight} setHeight={setHeight} />
                        <CheckDetailCard />
                    </div>
                </div>
                <button 
                    className='my-1'
                    onClick={handleSubmit}
                >다이어리 수정하기</button>
            </div>
    );
}

