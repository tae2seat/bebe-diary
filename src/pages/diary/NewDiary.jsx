import React, { useState } from 'react';
import TagButton from '../../components/tag/TagButton';
import TagInfo from '../../components/tag/TagInfo';
import { loggedApi } from '../../axios';
import baby from '../../images/baby_03.png';
import arrow from '../../images/arrow.png';
import BabyProfileCard from '../../components/Cards/BabyProfileCard';
 
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
        <div className='flex justify-around w-full px-16 py-16'>
            <div className=''>
                <img src={arrow} alt='arrowLeft' className='w-8 h-8 rounded-full p-1'/>
            </div>
            <div className='flex flex-col '>
                <div  className=' relative w-[890px] h-20'>
                    <img src={baby} alt='baby' className='absolute -bottom-2 left-20 w-28 h-16'/>
                </div>



                <div className='flex gap-11'>
                    <div  className=' flex justify-center items-center w-[890px] h-[480px] rounded-[40px] bg-[#fff0f0]/50 '>
                        <div className='flex flex-col w-[720px] h-[360px] bg-white'>

                            <form onSubmit={handleSubmit} className=' flex flex-col justify-evenly relative '>

                                <div className='flex items-center w-full h-9 '>
                                    <label className='text-xl px-3'>제목 :</label>
                                    <input type='text' onChange={handleChangeTitle} className=' flex items-center text-xl'/>
                                </div>

                                <div className='flex items-center w-full h-8 '>
                                    <label className='text-lg px-3'>오늘의 날짜는?</label>
                                    <input type='date' onChange={handleChangeDate} className='flex items-center text-lg '/>
                                </div>


                                <div className=' flex flex-col w-full h-56 py-4 px-8'>
                                    <div className='flex justify-start items-end px-3 gap-1 w-full h-8 bg-white'>
                                        <TagButton onClick={() => handleTagValue(1)} buttonText='하루다이어리' />
                                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트' />
                                    </div>
                                    <div className='w-full h-64 bg-red-50 rounded-2xl px-4 py-1'>
                                        <TagInfo tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                                    </div>
                                </div>

                                <div className='flex justify-center items-center w-full h-14'>
                                    <button className=' flex justify-center items-center w-40 h-8 px-4 rounded-2xl bg-blue-100 '> 다이어리 저장하기</button>   
                                </div>
                             

                            </form>
                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center'>    
                        <BabyProfileCard />  
                    </div>

                </div>

            </div>
        </div>
        
    );
}
