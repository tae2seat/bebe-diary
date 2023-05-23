import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';

export default function BabyProfile() {


    const dispatch = useDispatch()
    const { pregnantDate } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])

    return (                
        <div>
            <div>
                <label>아기 이름 : </label>
                <p>{pregnantDate}</p>
            </div>
        </div>
    );
}

