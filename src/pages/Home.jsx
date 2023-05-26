import React from 'react';
import { useSelector } from 'react-redux';
import LoginHome from '../components/LoginHome';
import LogoutHome from '../components/LogoutHome';

export default function Home() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
            <div className='flex justify-around w-full h-full'>
                { isLoggedIn ? <LoginHome /> : <LogoutHome /> }
            </div>
    );
}

