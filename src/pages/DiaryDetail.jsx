import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { loggedApi } from '../axios';
import TagButton from '../components/tag/TagButton';
import TagDetail from '../components/tag/TagDetail'
import DeleteButton from '../components/buttons/DeleteButton';
import baby from '../images/baby_03.png';
import arrow from '../images/arrow.png';
import BabyProfileCard from '../components/Cards/BabyProfileCard';
import moment from 'moment';

 

export default function DiaryDetail() {

    const {diaryId} = useParams()
    const navigate = useNavigate()

    const [diary, setDiary] = useState(null)
    
    const [tagValue, setTagValue] = useState(1)

    const handleTagValue = (tagValue) => {
        setTagValue(tagValue)
    }

    const getDiary = async () => {
        try {
            const response = await loggedApi.get(`/detail/${diaryId}`)
            setDiary(response.data)
        } catch (error) {
            console.log(error)
            navigate('/diaries')
        }
    }
    
    useEffect(() => {
        getDiary()
    },[loggedApi]) //왜?? 

    const handleClickDelete = async () => {
        try {
            const response = await loggedApi.delete(`/delete/${diaryId}`)
            alert("다이어리 삭제 성공!!")
            navigate('/diaries')
        } catch (error) {
            alert("다이어리 삭제 실패!!")
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
                    <div  className='  flex justify-center items-center w-[890px] h-[480px] rounded-[40px] bg-[#fff0f0]/50 '>
                        <div className='flex flex-col w-[720px] h-[360px] bg-white'>
                       

                            <div className='flex items-center w-full h-9 '>
                                <label className='text-xl px-3'>제목 :</label>
                                <span className=' flex items-center text-xl'>{diary.title}</span>
                            </div>


                            <div className='flex items-center w-full h-8 '>
                                <label className='text-lg px-3'>다이어리 작성날짜 : </label>
                                <span className='flex items-center text-lg '>{moment(diary.createdAt).format('YYYY-MM-DD')}</span>
                            </div>


                            <div className='flex flex-col w-full h-56 py-4 px-8'>
                                <div className='flex justify-start items-end px-3 gap-1 w-full h-8 bg-white'>
                                    <TagButton  onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                                    <TagButton  onClick={() => handleTagValue(2)} buttonText='성장 다이어리' />
                                    <TagButton  onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                                </div>
                                <div className='w-full h-64 bg-red-50 rounded-2xl px-4 py-1'>
                                    <TagDetail tagValue={tagValue} diary={diary} />
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-full h-14'>
                                <Link to={`/diary/${diaryId}/edit`} className=' flex justify-center items-center w-40 h-8 px-4 rounded-2xl bg-blue-100 ' >수정하기</Link>
                                <DeleteButton onClick={handleClickDelete} />
                            </div>








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

 <div className='bg-blue-100 w-2/3 h-[70vh] rounded-2xl'>
            
         </div>