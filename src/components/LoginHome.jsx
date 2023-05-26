import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LoginHome() {

    const { userId } = useSelector((state) => state.profile)
    return (
        <div className='flex justify-around w-full px-16 py-16'>
            <Link to={'/new'} className='w-full p-2 text-base'>다이어리 새로쓰기 </Link>
            <Link to={'/profile'} className='w-full p-2 text-base'>프로필 수정하기 </Link>
            <Link to={`/baby/${userId}/register`} className='w-full p-2 text-base'>아기 정보 등록하기</Link>
            <Link to={'/diaries'} className='p-2 text-base' >베베 다이어리 보러가기</Link>   
        </div>
    );
}

