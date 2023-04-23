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
        return <div>로그인을 해주세요!</div>
    }
    
    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) { 
        return <div>Error occurred!</div>
    }

    return (
        <div>
            <p>이름 : {name} </p>
        </div>
    );
}

