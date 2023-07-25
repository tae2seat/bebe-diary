import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function BabyProfileRegister() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://api.mybebe.net/api/v1/diary/baby',
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      if (response.status === 200) {
        navigate('/')
      }
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <span className="text-gray-500 mr-2">태명/이름 :</span>
            <input
              className="text-gary-300 border-none pl-2 "
              {...register('name', {
                required: '이름은 필수 입력 사항입니다.',
              })}
              type="text"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <span className="text-gray-500 mr-2">태어난 날짜 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              {...register('birthDate', {
                required: '이름은 필수 입력 사항입니다.',
              })}
              type="date"
            />
            {errors.birthDate && <p>{errors.birthDate.message}</p>}
          </div>
          <div>
            <span className="text-gray-500 mr-2">성별 :</span>
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
          </div>
          <div>
            <span className="text-gray-500 mr-2">예정일 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              {...register('expectDate', {
                required: '예정일은 필수 입력 사항입니다.',
              })}
              type="date"
            />
            {errors.expectDate && <p>{errors.expectDate.message}</p>}
          </div>
          <div>
            <span className="text-gray-500 mr-2">임신한 날짜 :</span>
            <input
              className=" text-gary-300 border-none pl-2 "
              {...register('pregnantDate', {
                required: '임신한 날은 필수 입력 사항입니다.',
              })}
              type="date"
            />
            {errors.pregnantDate && <p>{errors.pregnantDate.message}</p>}
          </div>
          <button className="my-20">아기 정보 등록하기</button>
        </form>
      </div>
    </div>
  )
}
