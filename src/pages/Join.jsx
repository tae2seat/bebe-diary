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
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <h1 className='flex justify-center items-center 1/2 h-16 text-2xl mt-10'>회원가입하기</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center w-1/2 h-92 py-10  border-b-2 border-b-slate-200'>
                <div className= 'flex flex-col justify-around h-16 w-1/2 my-1'>
                    <label className='flex justify-start items-center text-xl w-full h-8 p-1'>이름 :</label>
                    <input type='text' onChange={handleChangeName} className=' flex justify-start items-center border-2 rounded-md w-full h-8' />
                </div>
                <div className= 'flex flex-col justify-around h-16 w-1/2 my-1'>
                    <label className='flex justify-start items-center text-xl w-full h-8 p-1'>email :</label>
                    <input type='text' onChange={handleChangeEmail} className=' flex justify-start items-center border-2 rounded-md w-full h-8'/>
                </div>
                <div className= 'flex flex-col justify-around h-16 w-1/2 my-1'>
                    <label className='flex justify-start items-center text-xl w-full h-8 p-1'>password :</label>
                    <input type='text' onChange={handleChangePassword} className=' flex justify-start items-center border-2 rounded-md w-full h-8'/>
                </div>
                <div className= 'flex flex-col justify-around h-16 w-1/2 my-1'>
                    <label className='flex justify-start items-center text-xl w-full h-8 p-1'>gender :</label>
                    <input type='text' onChange={handleChangeGender} placeholder=' 남자 or 여자 ' className=' flex justify-start items-center border-2 rounded-md w-full h-8'/>
                </div>
                <div  className= 'flex flex-col justify-around h-16 w-1/2 my-1'>
                    <label  className='flex justify-start items-center text-xl w-full h-8 p-1'>생년월일 :</label>
                    <input type='date' onChange={handleChangeBirthDate} className=' flex justify-start items-center border-2 rounded-md w-full h-8'/>
                </div>
                <button className='h-10 w-1/3 rounded-2xl bg-white hover:bg-red-100 mt-10 border-1 border-slate-100'>
                    <p className='text-lg'>회원가입하기</p>
                </button>
            </form>
            
            <Link to='/login' className='flex justify-center items-center h-10  w-1/6  rounded-2xl bg-white hover:bg-red-100 my-10' >
                <p className='text-lg'>로그인 하기</p>
            </Link>
        
        </div>
    );
}

