import React, { useEffect, useState } from 'react'
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

  const onValid = () => {
    console.log('입력값이 유효합니다.')
  }

  const onInvalid = () => {
    console.log('입력값이 유효하지 않습니다.')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePwChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    const rememberValue = localStorage.getItem('remember')
    if (rememberValue) {
      setRemember(rememberValue === 'true')
    }
  }, [])

  const handleRememberChange = (e) => {
    const { checked } = e.target
    setRemember(checked)
    localStorage.setItem('remember', checked)
  }

  const handleLogin = async (e) => {
    try {
      const response = await authApi.post('/login', {
        email,
        password,
      })
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)

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
        onSubmit={handleSubmit(handleLogin, onValid, onInvalid)}
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
          <p className="text-xs text-gray-500">{errors.password.message}</p>
        )}
        <div className="mb-24 inline whitespace-nowrap relative -left-20">
          <input
            className="input"
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={handleRememberChange}
          />
          <label htmlFor="remember">remember me</label>
        </div>
        <button className="button submit">login</button>
      </form>
    </div>
  )
}
