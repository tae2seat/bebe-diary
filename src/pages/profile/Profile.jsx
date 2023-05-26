import React from 'react';
import UserProfile from '../../components/profile/UserProfile';
import BabyProfile from '../../components/profile/BabyProfile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profile() {

    const { userId } = useSelector((state) => state.profile)


    return (
        <div className='flex flex-col justify-center items-center w-full h-full px-16 py-16'>
            <div className='flex gap-32'>
                <UserProfile/>
                <BabyProfile />
            </div>
            <Link to={`/profile/${userId}/edit`} >
                프로필 수정하기 
            </Link>
        </div>
    );
}

