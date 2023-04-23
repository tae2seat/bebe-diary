import React from 'react';
import { useNavigate } from 'react-router-dom';
import GotoButton from '../components/buttons/GotoButton';

export default function Home() {

    const navigate= useNavigate()

    const handleClick = (e) => {
        navigate('/new')
    }
    return (
        <div>
           <button onClick={handleClick} >
            다이어리 새로쓰기 
           </button>
           <GotoButton buttonText='다이어리 리스트페이지' link='/diaries' />
        </div>
    );
}

