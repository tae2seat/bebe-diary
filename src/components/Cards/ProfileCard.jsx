import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice';

export default function ProfileCard() {

    const dispatch = useDispatch()
    const { name, isLoading, isError } = useSelector((state) => state.profile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn){
            dispatch(getProfile())
        }
    },[isLoggedIn])

    if(!isLoggedIn){
        return <div>Hello Diary!</div>
    }
    
    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) { 
        return <div>Error occurred!</div>
    }

    return ( 
        <div className='flex justify-center items-center w-[800px] h-14 gap-2 px-8 py-6 rounded-full bg-[#1e1e1e]/5' >
            <p className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center text-[#231f20]'>오늘은 "아기태명"의 어떤 모습을 기록해볼까요?</p>
        </div>
           
    );
}

