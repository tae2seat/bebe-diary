import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../redux/slices/profileSlice';

export default function LoginHome() {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const {userId} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isLoggedIn) {
           dispatch(getProfile())
        }
    },[isLoggedIn])

    return (
        <div>
            
        </div>
    );
}

