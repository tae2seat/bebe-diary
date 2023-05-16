import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LoginHome() {
    return (
        <div>
            <Link to={'/new'} className='p-2 text-base'>다이어리 새로쓰기 </Link>
            <Link to={'/diaries'} className='p-2 text-base' >베베 다이어리 보러가기</Link>   
        </div>
    );
}

