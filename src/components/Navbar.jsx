import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import mainLogo from '../images/main-logo.png';
import ProfileCard from './Cards/ProfileCard';
import { authApi, loggedApi } from '../axios';
import { Link, useNavigate } from 'react-router-dom';
import NavbarCard from './Cards/NavbarCard';
import { getBabyProfile } from '../redux/slices/babyProfileSlice'
import axios from 'axios';


export default function Navbar() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { babyName, isLoading, isError } = useSelector((state) => state.babyProfile)


    const [profileImage, setProfileImage] = useState('')

    useEffect(() => {
        if(isLoggedIn){
            dispatch(getBabyProfile())
        }
    },[isLoggedIn])

    useEffect(() => {
        fetchProfileImage()
    },[])

    const fetchProfileImage = async () => {
        try {
            const response = await loggedApi.get('/profile')
            console.log(profileImage)
            setProfileImage(response.data.avatar)
        } catch (error) {
            console.log(error)
        }
        //cors 에러
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
        <div className='w-full h-36 flex justify-between items-center bg-yellow-100 px-5'>
            <Link to='/' className='flex justify-center items-center w-60 h-24 p-2'>
                <img src={mainLogo} alt='logo' className='' />
            </Link>
            <div className='flex justify-center items-center h-full'> 
            { 
                isLoggedIn 
                ? <NavbarCard text={`오늘은 "${babyName}"의 어떤 모습을 기록해볼까요?`}/>
                : <NavbarCard text='Welcome to Bebe Diary! Login Please!'/>
            }
            </div>
            <div className='flex justify-center items-center  h-full'>
                { 
                    isLoggedIn 
                    ? <button onClick={handleLogout} className='w-36 h-14 bg-[#1E1E1E] rounded-full text-2xl text-white text-semi'>로그아웃</button>
                    : <button onClick={handleLogin} className='w-36 h-14 bg-[#1E1E1E] rounded-full text-2xl text-white text-semi'>로그인</button>
                } 
            </div>
            <Link to='/profile' className='flex justify-center items-center w-24 h-24 gap-2 rounded-[30px] bg-[#f2f2f2]'>
                <img src={profileImage} alt='profile'  />
            </Link>
        </div>
    );
}

