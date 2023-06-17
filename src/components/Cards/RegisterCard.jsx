import React, { useState } from 'react';
import '../../pages/Home.css' 
import { authApi } from '../../axios';


export default function RegisterCard() {

    const [name, setName] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePwChange = (e) => {
        setPassword(e.target.value)
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    const handleBirthChange = (e) => {
        setBirthDate(e.target.value)
    }

    const register = async (e) => {
        e.preventDefault()
        try {
            const response = await authApi.post('/join',{
                name,
                email,
                password,
                gender,
                birthDate
            })
            console.log('성공!!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>register</h1>
            <form 
                autoComplete='off'
                onSubmit={register}>
                <input
                    type='text' 
                    placeholder='username' 
                    onChange={handleNameChange}
                />
                <input
                    type='email' 
                    placeholder='email' 
                    onChange={handleEmailChange}
                />
                <input
                    type='password' 
                    placeholder='password' 
                    onChange={handlePwChange}
                />
                <input
                    type='text' 
                    placeholder='gender' 
                    onChange={handleGenderChange}
                />
                <input
                    type='date' 
                    onChange={handleBirthChange}
                />
                <button className='button submit'>create account</button>
            </form>
        </div>
    );
}

