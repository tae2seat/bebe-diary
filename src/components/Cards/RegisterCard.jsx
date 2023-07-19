import React, { useState } from 'react'
import '../../pages/Home.css'
import { authApi } from '../../axios'
import { useForm } from 'react-hook-form'

export default function RegisterCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onValid = () => {
    console.log('입력값이 유효합니다.')
  }

  const onInvalid = () => {
    console.log('입력값이 유효하지 않습니다.')
  }

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

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await authApi.post('/join', {
        name,
        email,
        password,
        gender,
        birthDate,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="mt-16 mb-4">register</h1>
      <form
        className="flex flex-col items-center pt-2 gap-2"
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitRegister, onValid, onInvalid)}
      >
        <input
          className="input"
          {...register('username', { required: true })}
          type="text"
          placeholder="username"
          onChange={handleNameChange}
        />
        <input
          className="input"
          {...register('email', {
            required: true,
            validate: {
              use: (value) => !value.includes('@' || '@를 사용해주세요'),
            },
          })}
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="text-xs text-gray-500">@가 포함된 주소가 필요합니다.</p>
        )}
        <input
          className="input"
          {...register('password', {
            required: true,
            minLength: { value: 8, message: '8글자 이상 써주세요.' },
          })}
          type="password"
          placeholder="password"
          onChange={handlePwChange}
        />
        {errors.password && (
          <p className="text-xs text-gray-600">비밀번호는 8글자 이상입니다.</p>
        )}
        <select
          className="input"
          {...register('gender', {
            required: true,
          })}
          value={gender}
          onChange={handleGenderChange}
        >
          <option>Select gender</option>
          <option>남자</option>
          <option>여자</option>
        </select>
        <input
          className="input"
          {...register('birth', {
            required: true,
          })}
          type="date"
          onChange={handleBirthChange}
        />
        <button className="button submit">create account</button>
      </form>
    </div>
  )
}
