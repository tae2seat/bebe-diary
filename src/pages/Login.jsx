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
            
            dispatch(login(response.data.user))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    //비동기 작업을 한 후에 dispatch에 결과갑을 넣어주는 것 


    return (
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email :</label>
                    <input type='email' onChange={handleChangeEmail} />
                </div>
                <div>
                    <label>password :</label>
                    <input type='password' onChange={handleChangePassword} />
                </div>
                <button>
                    <p>로그인 하기</p>
                </button>
            </form>
            <Link to='/join' >
                <p>회원가입하기</p>
            </Link>
        </div>
    );
}

