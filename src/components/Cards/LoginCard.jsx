import React, { useState } from 'react';
import '../../pages/Home.css' 
import { authApi } from '../../axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function LoginCard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePwChange = (e) => {
        setPassword(e.target.value)
    }

    const login = async (e) => {
        e.preventDefault()
        try {
            const response = await authApi.post('/login', {
                email,
                password
            })
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)

            dispatch(login(response.data.user))
            // 로그인 하면 새로고침 할 수 있게 만들기 
        } catch (error) {
            console.log(error)
        }
    }
     //비동기 작업을 한 후에 dispatch에 결과갑을 넣어주는 것 
    return (
        <div className='signin'>
            <h1>sign in</h1>
            <form 
                className='more-padding'
                onSubmit={login}>
                <input 
                    type='email' 
                    value={email}
                    placeholder='email' 
                    onChange={handleEmailChange}
                />
                <input 
                    type='password' 
                    value={password}
                    placeholder='password'
                    onChange={handlePwChange} 
                />
                <button className='button submit'>login</button>
            </form>
        </div>
    );
}

