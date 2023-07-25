import React from 'react'
import { authApi } from '../../axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/authSlice'
import { useForm } from 'react-hook-form'

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
      if (response.status === 401) {
        alert('비밀번호가 정확하지 않습니다. 로그인을 다시 시도해주세요.')
      }
      dispatch(login(response.data.user))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  //비동기 작업을 한 후에 dispatch에 결과갑을 넣어주는 것
  return (
    <div>
      <h1 className="mt-16 mb-20">sign in</h1>
      <form
        className="flex flex-col items-center pt-2 gap-2"
        onSubmit={handleSubmit(handleLogin)}
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
        <button className="button submit">login</button>
      </form>
    </div>
  )
}
