import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/authSlice';
import { authApi } from '../axios';

export default function Login() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await authApi.post('/login',{
                email,
                password
            })
            
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            
            console.log(localStorage)
            dispatch(login(response.data.user))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    //비동기 작업을 한 후에 dispatch에 결과갑을 넣어주는 것 
    

    return (
        <div className='flex flex-col justify-center items-center w-2/3 h-[70vh] bg-slate-400'>
            <h1 className=' flex justify-center items-center w-1/2 h-16 text-2xl mt-10'>로그인하기</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center w-1/2 h-92   py-10 border-b-2 border-b-slate-200'>
                <div className= 'flex flex-col justify-around h-20 w-1/2 p-1'>
                    <label className='flex justify-start items-center text-xl w-full h-8'>email :</label>
                    <input type='email' onChange={handleChangeEmail} className=' flex justify-start items-center border-2 rounded-md w-full h-8' />
                </div>
                <div className= 'flex flex-col justify-around h-20 w-1/2 p-1'>
                    <label  className='flex justify-start items-center text-xl w-full h-8'>password :</label>
                    <input type='password' onChange={handleChangePassword}  className=' flex justify-start items-center border-2 rounded-md w-full h-8' />
                </div>
                <button className='h-10 w-1/3 rounded-2xl bg-white hover:bg-red-100 mt-10 border-1 border-slate-100 '>
                    <p className='text-lg'>로그인 하기</p>
                </button>
            </form>
            <Link to='/join' className='flex justify-center items-center h-10  w-1/6  rounded-2xl bg-white hover:bg-red-100 my-10' >
                <p className='text-lg'>회원가입하기</p>
            </Link>
            <p>회원이 아니시면 가입을 먼저 해주세요! </p>

        </div>
    );
}

