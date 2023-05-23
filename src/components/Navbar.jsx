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
        <div className='w-[1920px] h-[180px] bg-white flex justify-between items-center py-10 px-14'>
            <Link to='/' className='flex justify-center items-center w-[310px] h-[130px]'>
                <img src={mainLogo} alt='logo' />
            </Link>
            <div className='flex justify-center items-center h-full'>
                <ProfileCard />
            </div>
            <div className='flex justify-center items-center  h-full'>
                { 
                    isLoggedIn 
                    ? <button onClick={handleLogout} className='w-[184px] h-[75px] bg-[#1E1E1E] rounded-full text-2xl text-white text-semi'>로그아웃</button>
                    : <GotoButton buttonText='로그인' link='/login' />
                } 
            </div>
            <Link to='/profile' className='flex justify-center items-center w-[115px] h-[115px] gap-2.5 rounded-[50px] bg-[#f2f2f2]'>
                <div>user이미지</div>
            </Link>
        </div>
    );
}

