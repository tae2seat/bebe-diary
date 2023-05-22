import React from 'react';
import { useSelector } from 'react-redux';
import LoginHome from '../components/LoginHome';
import LogoutHome from '../components/LogoutHome';

export default function Home() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
            <div className='bg-blue-100 w-full h-screen-vh'>
                { isLoggedIn ? <LoginHome /> : <LogoutHome /> }
            </div>
    );
}

