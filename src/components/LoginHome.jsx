import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../redux/slices/profileSlice';

export default function LoginHome() {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const {userId} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isLoggedIn) {
           dispatch(getProfile())
        }
    },[isLoggedIn])

    return (
        <nav className=''>
            <Link to={'/new'} className=''>다이어리 새로쓰기 </Link>
            <Link to={'/profile'} className=''>프로필 수정하기 </Link>
            <Link to={`/baby/${userId}/register`} className=''>아기 정보 등록하기</Link>
            <Link to={'/diaries'} className='' >베베 다이어리 보러가기</Link>   
        </nav>
    );
}

