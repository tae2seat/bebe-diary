import React from 'react'
import { authApi } from '../../axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/authSlice'
import { useForm } from 'react-hook-form'
import babyface from '../../lottie/baby-face.json'
import Lottie from 'lottie-react'

export default function LoginCard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = async (data) => {
    try {
      const response = await authApi.post('/login', {
        ...data,
      })
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      dispatch(login(response.data.user))
      navigate('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('로그인에 실패했습니다. 올바른 아이디와 비밀번호를 입력하세요.')
      } else {
        console.log(error)
      }
    }
  }
  //비동기 작업을 한 후에 dispatch에 결과갑을 넣어주는 것
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 mb-5">Hello!</h1>
      <Lottie className="w-36 h-36" animationData={babyface} />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col mt-5 gap-2"
      >
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
          <p className="text-xs text-gray-500">{errors.password.message}</p>
        )}
        <button className="mt-8">로그인</button>
      </form>
    </div>
  )
}
