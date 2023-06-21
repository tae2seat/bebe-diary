import React, { useEffect, useState } from 'react';
import baby from '../../../images/baby_03.png';


export default function  DailyCard({ setTitle, setDate, setContent}) {

    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowImage((prevShowImage) => !prevShowImage)
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleContentChange =(e) => {
        setContent(e.target.value)
    }

    return (
        <div className='relative bg-red-100 w-96 md:w-3/5 mt-20 md:mt-24 rounded-2xl'>
            { showImage &&
                <img src={baby} alt='baby' className='absolute -top-14 left-60 w-28 h-16 md:-top-20 md:left-20 md:w-40 md:h-24' />}
            <h1>하루 다이어리</h1>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center'>
                    <label className='w-12 text-right'>제목 :</label>
                    <input 
                        type='text'
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label>오늘의 날짜는?</label>
                    <input 
                        type='date' 
                        onChange={handleDateChange}
                    />
                </div>
                <textarea 
                    className='resize-none m-2 p-2 rounded-lg border bg-red-100 border-red-50 hover:border-white outline-none'
                    rows={10}
                    type='text'
                    onChange={handleContentChange}/>
            </div>
        </div>
    );
}

