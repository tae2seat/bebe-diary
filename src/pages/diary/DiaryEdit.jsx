import React, { useEffect, useState } from 'react';
import TagButton from '../../components/tag/TagButton';
import TagEdit from '../../components/tag/TagEdit'
import { loggedApi } from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
import baby from '../../images/baby_03.png';
import arrow from '../../images/arrow.png';
import BabyProfileCard from '../../components/Cards/BabyProfileCard';



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

    const [tagValue, setTagValue] = useState(1)
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleTagValue = (tagValue) => {
        setTagValue(tagValue)
    }

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
        <div className='flex justify-around w-full px-16 py-16'>
            <div className=''>
                <img src={arrow} alt='arrowLeft' className='w-8 h-8 rounded-full p-1'/>
            </div>
        
            <div className='flex flex-col '>
                <div  className='relative w-[890px] h-20'>
                    <img src={baby} alt='baby' className='absolute -bottom-2 left-20 w-28 h-16'/>
                </div>


                <div className='flex gap-11'>
                    <div  className=' flex justify-center items-center w-[890px] h-[480px] rounded-[40px] bg-[#fff0f0]/50'>
                        <div className='flex flex-col w-[720px] h-[360px] bg-white'>

                            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly relative '>
                                <div className='flex items-center w-full h-9 '>
                                    <label className='text-xl px-3' >제목 : </label>
                                    <input type='text' onChange={handleChangeTitle} defaultValue={title} className='flex items-center text-lg '  />
                                </div>
                                <div className='flex items-center w-full h-18 '>
                                    <label className='text-xl px-3'>수정날짜는?</label>
                                    <input type='date' onChange={handleChangeDate} className='flex items-center text-lg ' />
                                </div>
                                <div  className='flex flex-col w-full h-56 py-4 px-8'>
                                    <div className='flex justify-start items-end px-3 gap-1 w-full h-8 bg-white'>
                                        <TagButton onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                                    </div>
                                    <div className='w-full h-64 bg-red-50 rounded-2xl px-4 py-1'>
                                        <TagEdit tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-full h-14'>
                                    <button  className=' flex justify-center items-center w-40 h-8 px-4 rounded-2xl bg-blue-100'>다이어리 수정하기</button>
                                </div>
                            </form>




                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center '>    
                        <BabyProfileCard />

                    </div>

                </div>

            </div>
    </div>
    
        
    );
}

