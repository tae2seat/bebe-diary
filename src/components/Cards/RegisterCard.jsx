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
          {...register('username', {
            required: '사용자 이름은 필수 입력 사항입니다.',
          })}
          type="text"
          placeholder="username"
          onChange={handleNameChange}
        />
        {errors.username && (
          <p className="text-xs text-gray-500">{errors.username.message}</p>
        )}
        <input
          className="input"
          {...register('email', {
            required: '이메일은 필수 입력 사항입니다.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: '유효한 이메일 주소를 입력해주세요.',
            },
          })}
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="text-xs text-gray-500">{errors.email.message}</p>
        )}
        <input
          className="input"
          {...register('password', {
            required: '비밀번호는 필수 입력 사항입니다.',
            minLength: { value: 8, message: '8글자 이상 써주세요.' },
          })}
          type="password"
          placeholder="password"
          onChange={handlePwChange}
        />
        {errors.password && (
          <p className="text-xs text-gray-600">{errors.password.message}</p>
        )}
        <select
          className="input"
          {...register('gender', {
            required: '성별은 필수 선택 사항입니다.',
          })}
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">Select gender</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        {errors.gender && (
          <p className="text-xs text-gray-600">{errors.gender.message}</p>
        )}
        <input
          className="input"
          {...register('birth', {
            required: '생년월일은 필수 입력 사항입니다.',
          })}
          type="date"
          onChange={handleBirthChange}
        />
        {errors.birthDate && (
          <p className="text-xs text-gray-600">{errors.birthDate.message}</p>
        )}
        <button className="button submit">create account</button>
      </form>
    </div>
  )
}
