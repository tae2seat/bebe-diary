import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BabyProfileRegister() {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [expectDate, setExpectDate] = useState('')
  const [pregnantDate, setPregnantDate] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeBirthDate = (e) => {
    setBirthDate(e.target.value)
  }
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }
  const handleChangeExpectDate = (e) => {
    setExpectDate(e.target.value)
  }
  const handleChangePregnantDate = (e) => {
    setPregnantDate(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://api.mybebe.net/api/v1/baby',
        {
          name,
          birthDate,
          gender,
          expectDate,
          pregnantDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      console.log('성공!!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="text-[#908d96] my-20">Baby Register Page</h1>
      <div className="flex justify-center py-20">
        <form
          className="flex flex-col items-start px-40 gap-5  py-4"
          onSubmit={handleSubmit}
        >
          <div>
            <span className="text-gray-500 mr-2">태명/이름 :</span>
            <input
              className="text-gary-300 border-none pl-2 "
              type="text"
              onChange={handleChangeName}
            />
          </div>
          <div>
            <span className="text-gray-500 mr-2">태어난 날짜 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              type="date"
              onChange={handleChangeBirthDate}
            />
          </div>
          <div>
            <span className="text-gray-500 mr-2">성별 :</span>
            <input
              className="text-gary-300 border-none pl-2 "
              type="text"
              onChange={handleChangeGender}
            />
          </div>
          <div>
            <span className="text-gray-500 mr-2">예정일 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              type="date"
              onChange={handleChangeExpectDate}
            />
          </div>
          <div>
            <span className="text-gray-500 mr-2">임신한 날짜 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              type="date"
              onChange={handleChangePregnantDate}
            />
          </div>
          <button className="my-20">아기 정보 등록하기</button>
        </form>
      </div>
    </div>
  )
}
