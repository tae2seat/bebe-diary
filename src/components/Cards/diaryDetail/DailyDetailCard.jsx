import React, { useEffect, useState } from 'react';
import baby from '../../../images/baby_03.png';


export default function  DailyDetailCard({ diary }) {

    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowImage((prevShowImage) => !prevShowImage)
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='relative bg-red-100 w-96 md:w-3/5 mt-20 md:mt-24 rounded-2xl'>
            { showImage &&
                <img src={baby} alt='baby' className='absolute -top-14 left-60 w-28 h-16 md:-top-20 md:left-20 md:w-40 md:h-24' />}
            <h1>하루 다이어리</h1>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center'>
                    <label className='w-12 text-right'>제목 :</label>
                    <div>{diary.title}</div>
                </div>
                <div>
                    <label>오늘의 날짜는?</label>
                    <div>{diary.createdAt}</div>
                </div>
                <div className='resize-none m-2 p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none'>{diary.content}</div>
            </div>
        </div>
    );
}

