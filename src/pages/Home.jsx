import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
        <div>
            {
                isLoggedIn ?
                <div className='flex justify-center items-center w-full h-10 px-40 py-8 gap-6'> 
                    <Link to={'/new'} className='p-2 text-base'>다이어리 새로쓰기 </Link>
                    <Link to={'/diaries'} className='p-2 text-base' >베베 다이어리 보러가기</Link>   
                </div>
                : null 
            }   
        </div>
    );
}

