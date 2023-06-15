import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import mainLogo from '../images/main-logo.png';
import { authApi } from '../axios';
import { Link, useNavigate } from 'react-router-dom';
import { getBabyProfile } from '../redux/slices/babyProfileSlice'
import LogButton from './buttons/LogButton';
import axios from 'axios';


export default function Navbar() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { babyName, isLoading, isError } = useSelector((state) => state.babyProfile)

    const message = isLoggedIn ? `오늘은 "${babyName}"의 어떤 모습을 기록해볼까요?` : 'Welcome to Bebe Diary! Login Please!'


    const [profileImage, setProfileImage] = useState('')

    useEffect(() => {
        if(isLoggedIn){
            dispatch(getBabyProfile())
            fetchProfileImage()
        }
    },[isLoggedIn])

    const fetchProfileImage = async () => {
        try {
            const response = await axios.get('https://api.mybebe.net/api/v1/profile',{
                headers : {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setProfileImage(response.data.avatar)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleLogout = async () => {
        try {
            const response = await authApi.post('/logout', null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            dispatch(logout())      
            localStorage.clear()
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = (e) => {
        navigate('/login')
    }


    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) { 
        return <div>Error occurred!</div>
    }
    
    return (
        <header className='flex justify-between items-center shadow-md p-4 gap-2 '>
            <Link to='/' className='shrink-0'>
                <img src={mainLogo} alt='logo' className='w-58 h-20' />
            </Link>
            <div className='hidden md:block px-20 py-3 rounded-full bg-[#1e1e1e]/5 ' >
                <p className='text-2xl font-medium text-[#231f20] truncate'>{message}</p>
            </div>
            <div className='flex items-center px-6 gap-6'>
                <Link to='/profile' className=' hidden md:block rounded-full bg-slate-50 object-cover'>
                    <img src={profileImage} alt='profile' className='flex items-center w-20 h-20'/>
                </Link>
                { isLoggedIn 
                    ? <LogButton text='로그아웃' onClick={handleLogout} />
                    : <LogButton text='로그인' onClick={handleLogin} /> } 
            </div>
        </header>
    );
}

