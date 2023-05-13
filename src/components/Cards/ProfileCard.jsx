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
        <div className=''>
            <span className='text-xl p-1'>오늘도 아이와 함께</span>
            <span className='text-2xl'> {name}</span>
            <span className='text-xl p-1'>님의 일상을 기록하세요!</span>
        </div>
           
    );
}

