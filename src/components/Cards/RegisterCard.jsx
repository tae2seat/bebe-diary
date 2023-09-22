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
    <div className="flex flex-col items-center ">
      <h1 className="mt-10 mb-8">register</h1>
      <form
        className="flex flex-col justify-between gap-5"
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitRegister)}
      >
        <input
          className="input "
          {...register('name', {
            required: '사용자 이름은 필수입니다.',
          })}
          type="text"
          placeholder={errors.name ? errors.name.message : 'name'}
        />
        <input
          className="input"
          {...register('email', {
            required: '이메일은 필수입니다.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: '유효한 이메일 주소를 입력해주세요.',
            },
          })}
          type="email"
          placeholder={errors.email ? errors.email.message : 'eamil'}
        />
        <input
          className="input"
          {...register('password', {
            required: '비밀번호는 필수입니다.',
            minLength: { value: 8, message: '8글자 이상 써주세요.' },
          })}
          type="password"
          placeholder={errors.password ? errors.password.message : 'password'}
        />
        <select
          className="input"
          {...register('gender', {
            required: '성별은 필수입니다.',
          })}
          placeholder={errors.gender ? errors.gender.message : 'gender'}
        >
          <option value="">Select gender</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <input
          className="input"
          {...register('birthDate', {
            required: '생년월일은 필수입니다.',
          })}
          type="date"
          placeholder={errors.birthDate ? errors.birthDate.message : '생년월일'}
        />
        <button className="mt-5">create account</button>
      </form>
    </div>
  )
}
