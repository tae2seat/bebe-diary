import React from 'react'
import '../../pages/Home.css'
import { authApi } from '../../axios'
import { useForm } from 'react-hook-form'

export default function RegisterCard({ setIsSignUp }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSubmitRegister = async (data) => {
    try {
      const response = await authApi.post('/join', {
        ...data,
      })
      if (response.status === 200) {
        setIsSignUp(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="mt-16 mb-4">register</h1>
      <form
        className="flex flex-col items-center gap-2"
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitRegister)}
      >
        <input
          className="input"
          {...register('name', {
            required: '사용자 이름은 필수 입력 사항입니다.',
          })}
          type="text"
          placeholder="name"
        />
        {errors.name && (
          <p className="text-xs text-gray-500">{errors.name.message}</p>
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
        />
        {errors.password && (
          <p className="text-xs text-gray-600">{errors.password.message}</p>
        )}
        <select
          className="input"
          {...register('gender', {
            required: '성별은 필수 선택 사항입니다.',
          })}
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
          {...register('birthDate', {
            required: '생년월일은 필수 입력 사항입니다.',
          })}
          type="date"
        />
        {errors.birthDate && (
          <p className="text-xs text-gray-600">{errors.birthDate.message}</p>
        )}
        <button className="button submit ">create account</button>
      </form>
    </div>
  )
}
