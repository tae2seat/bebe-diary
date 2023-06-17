import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';

export default function BabyProfileCard() {

    const dispatch = useDispatch()
    const { babyName, babyBirthDate, babyGender, expectDate, pregnantDate, isLoading ,isError } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


    useEffect(() =>{
        if(isLoggedIn){
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])

    return (
    <div>
        <h1>baby profile</h1>
        <div className='flex flex-col'>
            <img />
            <p>이름 :{babyName}</p>
            <p>성별 :{babyGender}</p>
            <p>생일 :{new Date(babyBirthDate).toLocaleDateString()}</p>
            <p>{expectDate}</p>
            <p>{pregnantDate}</p>
        </div>
       
    </div>
    );
}

