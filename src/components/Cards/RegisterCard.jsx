import React, { useState } from 'react'
import '../../pages/Home.css'
import { authApi } from '../../axios'

export default function RegisterCard() {
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
        onSubmit={handleSubmitRegister}
      >
        <input
          className="input"
          type="text"
          placeholder="username"
          onChange={handleNameChange}
        />
        <input
          className="input"
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          onChange={handlePwChange}
        />
        <select className="input" value={gender} onChange={handleGenderChange}>
          <option>Select gender</option>
          <option>남자</option>
          <option>여자</option>
        </select>
        <input className="input" type="date" onChange={handleBirthChange} />
        <button className="button submit">create account</button>
      </form>
    </div>
  )
}
