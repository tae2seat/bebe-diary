import React, { useState } from 'react';
import { authApi } from '../../axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/authSlice';



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

    const handleSubmitLogin = async (e) => {
            e.preventDefault();
        try {
            const response = await authApi.post('/login', {
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
            <h1 className='mt-16 mb-20'>sign in</h1>
            <form 
                className='gap-2'
                onSubmit={handleSubmitLogin}>
                <input 
                    type='email' 
                    value={email}
                    placeholder='email' 
                    onChange={handleEmailChange}
                />
                <input 
                    type='password' 
                    placeholder='password'
                    onChange={handlePwChange} 
                />
                <div className='mb-24 inline whitespace-nowrap relative -left-20'>  
                    <input 
                        type='checkbox' 
                        id='remember' 
                    />
                    <label htmlFor='remember'>remember me</label>
                </div>
                <button className='button submit'>login</button>
            </form>
        </div>
    );
}

