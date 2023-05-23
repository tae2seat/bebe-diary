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
        <div className='flex justify-around w-[1920px] px-24 py-20 bg-white'>
            <div className=''>
                <img src={arrow} alt='arrowLeft' className='w-[40px] h-[40px] rounded-full p-1'/>
            </div>
            
            <div className='flex flex-col '>
                <div  className=' relative w-[1120px] h-[92px]'>
                    <img src={baby} alt='baby' className='absolute -bottom-3 left-32 w-[151px] h-[92px]'/>
                </div>


                <div className='flex gap-14'>
                    <div  className=' flex justify-center items-center w-[1120px] h-[600px] rounded-[50px] bg-[#fff0f0]/50 '>
                        <div className='flex flex-col w-[900px] h-[450px] bg-white'>

                            <form onSubmit={handleSubmit} className=' flex flex-col justify-evenly relative '>


                                <div className='flex items-center w-full h-12 '>
                                    <label className='text-xl px-4'>제목 :</label>
                                    <input type='text' onChange={handleChangeTitle} className=' flex items-center text-xl'/>
                                </div>


                                <div className='flex items-center w-full h-10 '>
                                    <label className='text-lg px-4'>오늘의 날짜는?</label>
                                    <input type='date' onChange={handleChangeDate} className='flex items-center text-lg '/>
                                </div>


                                <div className=' flex flex-col w-full h-72 py-4 px-10'>
                                    <div className='flex justify-start items-end px-4 gap-1 w-full h-10 bg-white'>
                                        <TagButton onClick={() => handleTagValue(1)} buttonText='하루다이어리' />
                                        <TagButton onClick={() => handleTagValue(2)} buttonText='성장 다이어리'/>
                                        <TagButton onClick={() => handleTagValue(3)} buttonText='체크 리스트' />
                                    </div>
                                    <div className='w-full h-80 bg-red-50 rounded-2xl px-5 py-1'>
                                        <TagInfo tagValue={tagValue} content={content} setContent={setContent} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} text={text} setText={setText} />
                                    </div>
                                </div>

                                <div className='flex justify-center items-center w-full h-16'>
                                    <button className=' flex justify-center items-center w-48 h-10 px-4 rounded-2xl bg-blue-100 '> 다이어리 저장하기</button>   
                                </div>
                             

                            </form>




                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center gap-10'>    
                        <BabyProfileCard />


                        <div className='flex justify-center items-center bg-[#595959]/10 w-[350px] h-[189px] rounded-3xl'>
                           <input placeholder='오늘 콩콩이의 하루를 한문장으로!' className='w-[280px] h-[100px] bg-[#595959]/5' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    );
}
