import React, { useEffect, useState } from 'react';
import { loggedApi } from '../axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function DiaryList() {
    
    const [diaries, setDiaries] = useState([])

    const getDiaries = async () => {
        try {
            const response = await loggedApi.get('/')
            setDiaries(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getDiaries()
    }, [])

    return (
    
            <section className='flex w-full h-full'>
                <ol className='flex flex-wrap w-full h-full p-20 list-decimal list-inside'>
                {
                        diaries ? diaries.map((diary) => (
                            
                            <Link to={`/diary/${diary.id}`} key={diary.id} >
                                { 
                                    diary.id % 2 === 1 && diary.id !== 1 
                                    ? <li className='w-32 h-32 bg-red-300'></li>
                                    : <li className='w-32 h-48 bg-blue-200'></li>
                                }
                                {/* <li className={`flex flex-col items-center bg-green-200 ${diary.id % 2 === 0 ? 'h-32' : 'h-16'}`}>
                                   <img className='w-32 h-32 bg-red-200' />
                                    <span className='bg-yellow-100'>{diary.title}</span>
                                    <span>{moment(diary.createdAt).format('YYYY-MM-DD')}</span>
                                </li> */}
                            </Link>
                        )) : <h1>Loading...</h1>
                    }
                </ol>
            </section>
    );
}

{/* <Link to='/new'>다이어리 새로쓰기</Link> */} 