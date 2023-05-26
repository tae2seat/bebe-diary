import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';

export default function BabyProfile() {

    const dispatch = useDispatch()
    const { name, birthDate, gender, expectDate , pregnantDate } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])

    return (                
        <div className='flex flex-col  bg-white w-[480px] h-96'>
            <div>
                <label>아기 이름 : </label>
                <p>{name}</p>
            </div>
            <div>
                <label>태어난 날 : </label>
                <p>{new Date(birthDate).toLocaleDateString()}</p>
            </div>
            <div>
                <label>아기 성별  : </label>
                <p>{gender}</p>
            </div>
            <div>
                <label>출산예정일: </label>
                <p>{expectDate}</p>
            </div>
            <div>
                <label>임신한 날짜 : </label>
                <p>{pregnantDate}</p>
            </div>
        </div>
    );
}

