import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import mainLogo from '../images/main-logo.png';
import GotoButton from './buttons/GotoButton';
import ProfileCard from './Cards/ProfileCard';
import { authApi } from '../axios';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

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

    return (
        <div className='w-full h-20 flex justify-around items-center bg-yellow-100 '>
            <Link to='/' className='flex justify-center items-center w-1/4 h-full'>
                <img src={mainLogo} alt='logo' className='h-20 ' />
            </Link>
            <div className='flex justify-center items-center w-1/2 h-full '>
                <ProfileCard />
            </div>
            <div className='flex justify-center items-center w-1/4 h-full'>
                { 
                    isLoggedIn 
                    ? <button onClick={handleLogout} className='w-32 h-10 bg-red-200 rounded-md text-lg'>로그아웃</button>
                    : <GotoButton buttonText='로그인' link='/login' />
                }
            </div>
        </div>
    );
}

