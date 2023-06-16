import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='bg-red-300'>
            <nav>
                <Link to='/'>다이어리 새로쓰기</Link>
                <Link >다이어리 목록보기</Link>
            </nav>
        </div>
    );
}

