import React, { useState } from 'react';
import { authApi } from '../axios';
import { Link } from 'react-router-dom';

export default function Join() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePasspword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeBirthDate = (e) => {
        setBirthDate(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await authApi.post('/join',{
                name,
                email,
                password,
                gender,
                birthDate
            })
            console.log('성공!',response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <h1>회원가입 Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름 :</label>
                    <input type='text' onChange={handleChangeName} />
                </div>
                <div>
                    <label>email :</label>
                    <input type='text' onChange={handleChangeEmail}/>
                </div>
                <div>
                    <label>password :</label>
                    <input type='text' onChange={handleChangePasspword}/>
                </div>
                <div>
                    <label>gender :</label>
                    <input type='text' onChange={handleChangeGender}/>
                </div>
                <div>
                    <label>생년월일 :</label>
                    <input type='date' onChange={handleChangeBirthDate}/>
                </div>
                <button>
                    <p>회원가입하기</p>
                </button>
            </form>
            <div>
                <Link to='/login' >
                    <p>로그인 하기</p>
                </Link>
            </div>
        </div>
    );
}

