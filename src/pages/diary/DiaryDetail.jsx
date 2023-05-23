import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { loggedApi } from '../../axios';
import TagButton from '../../components/tag/TagButton';
import TagDetail from '../../components/tag/TagDetail'
import DeleteButton from '../../components/buttons/DeleteButton';
import baby from '../../images/baby_03.png';
import arrow from '../../images/arrow.png';
import BabyProfileCard from '../../components/Cards/BabyProfileCard';
 

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
        <div className='flex justify-around w-[1920px] px-24 py-20 bg-white'>
            <div className=''>
                <img src={arrow} alt='arrowLeft' className='w-[40px] h-[40px] rounded-full p-1'/>
            </div>
            
            <div className='flex flex-col '>
                <div  className=' relative w-[1120px] h-[92px]'>
                    <img src={baby} alt='baby' className='absolute -bottom-4 left-32 w-[151px] h-[92px]'/>
                </div>


                <div className='flex gap-14'>
                    <div  className=' flex justify-center items-center w-[1120px] h-[600px] rounded-[50px] bg-[#fff0f0]/50 '>
                        <div className='w-[837px] h-[407px] bg-white'>
                       

                            <div className='flex items-center w-full h-12'>
                                <label className='text-xl px-4'>제목 :</label>
                                <span className=' flex items-center text-xl'>{diary.title}</span>
                            </div>


                            <div className='flex items-center w-full h-10 '>
                                <label className='text-lg px-4'>다이어리 작성날짜 : </label>
                                <span className='flex items-center text-lg '>{diary.createdAt}</span>
                            </div>


                            <div className=' flex flex-col w-full h-72 py-4 px-10'>
                                <div className='flex justify-start items-end px-4 gap-1 w-full h-10 bg-white'>
                                    <TagButton  onClick={() => handleTagValue(1)} buttonText='일상 다이어리' />
                                    <TagButton  onClick={() => handleTagValue(2)} buttonText='성장 다이어리' />
                                    <TagButton  onClick={() => handleTagValue(3)} buttonText='체크 리스트 다이어리' />
                                </div>
                                <div className='w-full h-80 bg-red-50 rounded-2xl px-5 py-1'>
                                    <TagDetail tagValue={tagValue} diary={diary} />
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-full h-16'>
                                <Link to={`/diary/${diaryId}/edit`} className=' flex justify-center items-center w-48 h-10 px-4 rounded-2xl bg-blue-100 ' >수정하기</Link>
                                <DeleteButton onClick={handleClickDelete} />
                            </div>








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

 <div className='bg-blue-100 w-2/3 h-[70vh] rounded-2xl'>
            
         </div>