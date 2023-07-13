import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loggedApi } from '../axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function DiaryList() {
    
    const [diaries, setDiaries] = useState([])

    useEffect(()=>{
        getDiaries()
    }, [])

    const getDiaries = async () => {
        try {
            const response = await loggedApi.get('/')
            setDiaries(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <section className='flex w-full h-full'>
                <ul className='w-full grid  grid-rows-2 grid-cols-4 gap-8 p-24 h-[650px] bg-yellow-100'>
                {   diaries ? diaries.map((diary, index) => (
                            <Link to={`/diary/${diary.id}`} key={diary.id} className='' >
                                <li className={` rounded-lg bg-slate-200 ${index % 2 === 1 ? 'h-44' : 'h-52'}`}>
                                    <img />
                                    <span>{diary.title}</span>
                                </li>
                            </Link>
                        )) : <h1>Loading...</h1> 
                }
                </ul>
            </section>
    );
}

{/* <Link to='/new'>다이어리 새로쓰기</Link> */} 

   {/* <li className={`flex flex-col items-center bg-green-200 ${diary.id % 2 === 0 ? 'h-32' : 'h-16'}`}>
                                   <img className='w-32 h-32 bg-red-200' />
                                    <span className='bg-yellow-100'>{diary.title}</span>
                                    <span>{moment(diary.createdAt).format('YYYY-MM-DD')}</span>
                                </li> */}