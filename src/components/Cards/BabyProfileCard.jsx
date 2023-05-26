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
    <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-between items-center gap-4 w-72 h-72 rounded-3xl bg-[#fff0f0]/20'>
            <div className=' flex justify-center mt-10 bg-white'>
                <img className='flex justify-center items-center w-36 h-48' />
            </div>
            <div className=' flex justify-end items-center w-56 h-10 pb-8'>
                <img src={imagePlus} alt='imagePlus' className='flex justify-center items-center w-10 h-10 bg-white rounded-full p-2' />
            </div>
        </div>
        <div className='flex justify-center items-center bg-[#595959]/10 w-72 h-36 rounded-3xl'>
            <input placeholder='오늘 콩콩이의 하루를 한문장으로!' className='w-64 h-28 rounded-md bg-[#595959]/5' />
        </div>
    </div>
    );
}

