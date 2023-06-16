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
    const handleChangePassword = (e) => {
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
        <div className='container'>
            <div className='welcome'>
                <div className='pinkbox'>
                    <div className='singup nodisplay'>
                        <h1>register</h1>
                        <form autoComplete='off' >
                            <input type='text' placeholder='usernames' onChange={handleChangeName} />
                            <input type='text' placeholder='email' onChange={handleChangeEmail} />
                            <input type='text' placeholder='password' onChange={handleChangePassword}/>
                            <input type='text' placeholder='gender' onChange={handleChangeGender}  />
                            <input type='date' onChange={handleChangeBirthDate} />
                        </form>
                    </div>
                    <div className='sign in'>

                    </div>

                </div>
            </div>
        </div>
    );
}

{/* <div className='flex flex-col items-center'>
<h1 className='text-xl py-8'>회원가입하기</h1>
<form onSubmit={handleSubmit} className='border-b-2 border-b-slate-200 p-2'>
    <div className= 'flex gap-1 pb-4'>
        <input type='text' onChange={handleChangeName} className='rounded-md border-2 ' />
    </div>
    <div className= 'flex gap-1 pb-4'>
        <input type='text' onChange={handleChangeEmail} className='rounded-md border-2 '/>
    </div>
    <div className= 'flex gap-1 pb-4'>
        <input type='text' onChange={handleChangePassword} className='rounded-md border-2 '/>
    </div>
    <div className= 'flex gap-1 pb-4'>
        <input type='text' onChange={handleChangeGender} placeholder=' 남자 or 여자 ' className='rounded-md border-2 '/>
    </div>
    <div  className= 'flex gap-1 pb-4'>
        <input type='date' onChange={handleChangeBirthDate} className=' rounded-md border-2 '/>
    </div>
    <button className='h-10 w-1/3 rounded-2xl bg-white hover:bg-red-100 mt-10 border-1 border-slate-100'>
        <p className='text-lg'>회원가입하기</p>
    </button>
</form>

<div className='flex justify-center items-center w-full h-34'>
    <Link to='/join' className='flex justify-center items-center h-10  w-1/6  rounded-2xl bg-white hover:bg-red-100 my-14' >
        <p className='text-lg '>로그인하기</p>
    </Link>
</div>
<p className='flex items-center justify-center w-full h-10 py-8'>즐거운 하루 기록하세요! </p>

</div> */}