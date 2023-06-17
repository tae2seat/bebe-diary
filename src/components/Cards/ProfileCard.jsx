import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice'


export default function ProfileCard() {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const { name, email, gender, birthDate, userId, avatar } = useSelector((state) => state.profile)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getProfile())
        }
    }, [])

    return ( 
            <div>
                <h1>Profile</h1>
                <div className='flex flex-col'>
                    <img src={avatar} alt='profileImage' />
                    <p>이름 :{name}</p>
                    <p>이메일 :{email}</p>
                    <p>성별 :{gender}</p>
                    <p>생일 :{birthDate}</p>
                </div>
            </div>
    );
}

