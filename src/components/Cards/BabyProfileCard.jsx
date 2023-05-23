import React, { useEffect } from 'react';
import imagePlus from '../../images/image-plus.png';
import { useDispatch, useSelector } from 'react-redux';
import { getBabyProfile } from '../../redux/slices/babyProfileSlice';

export default function BabyProfileCard() {

    const dispatch = useDispatch()
    const { name, birthDate, gender, expectDate, pregnantDate, isLoading ,isError } = useSelector((state) => state.babyProfile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() =>{
        if(isLoggedIn){
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])

    return (
        <div className='flex flex-col justify-between items-center gap-4 w-[350px] h-[366px] rounded-3xl bg-[#fff0f0]/20'>
            <div className=' flex justify-center mt-10 bg-white'>
                <img className='flex justify-center items-center w-[180px] h-[240px]' />
            </div>
            <div className=' flex justify-end items-center w-[280px] h-[50px] pb-10'>
                <img src={imagePlus} alt='imagePlus' className='flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full p-3' />
            </div>
        </div>
    );
}

