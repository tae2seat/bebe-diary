import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loggedApi } from '../../axios';


export default function UserProfile() {

    const dispatch = useDispatch()
    const { name, email, gender, birthDate, userId }= useSelector((state) => state.profile)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() =>{
        if(isLoggedIn){
            dispatch(getProfile())
        }
    },[isLoggedIn])

    

    return (
         <div className='flex flex-col  bg-white w-[480px] h-96'> 
            <div>
                <img src="" alt="profilePhoto" />
            </div>
            <div>
                <label>이름 :</label>
                <span>{name}</span>
            </div>
            <div>
                <label>email :</label>
                <span>{email}</span>
            </div>
            <div>
                <label>gender :</label>
                <span>{gender}</span>
            </div>
            <div>
                <label>생년월일 :</label>
                <span>{birthDate}</span>
            </div>
            
        </div>
    );
}

