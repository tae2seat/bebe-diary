import React from 'react';
import ProfileEditCard from '../components/Cards/ProfileEditCard';
import BabyProfileEditCard from '../components/Cards/BabyProfileEditCard';
import { useNavigate } from 'react-router-dom';


export default function ProfileEdit() {

    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate('/')
    }

    return (
        <div>
            <div className='flex justify-around py-40 bg-slate-200'>
                <ProfileEditCard />
                <BabyProfileEditCard />
            </div>
            <button className=' bg-yellow-100 my-10' onClick={handleClick}>수정 완료하기</button>
        </div>
    );
}

