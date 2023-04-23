import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import GotoButton from './buttons/GotoButton';
import ProfileCard from './Cards/ProfileCard';
import { loggedApi } from '../axios';

export default function Navbar() {
    
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const handleLogout = async () => {
        try {
            const response = await loggedApi.post('/auth/logout')
            dispatch(logout())
            localStorage.clear()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-16 flex justify-around items-center'>
            <div>
                logo image
            </div>
            <div>
                <ProfileCard />
            </div>
            <div>
                { 
                    isLoggedIn 
                    ? <button onClick={handleLogout}>로그아웃</button>
                    : <GotoButton buttonText='로그인' link='/login' />
                }
            </div>
        </div>
    );
}

