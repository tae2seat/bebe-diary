import React, { useEffect, useState } from 'react'
import { loggedApi } from '../../axios'
import axios from 'axios'
import basic from '../../images/ICON_11.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function BabyProfileEditCard({
  babyName,
  babyId,
  babyFace,
  expectDate,
  babyGender,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    setValue('name', babyName)
    setValue('gender', babyGender)
  }, [setValue, babyName, babyGender, expectDate])

  const [babyNewFace, setBabyNewFace] = useState(null)

  const handleBabyFaceChange = (e) => {
    setBabyNewFace(e.target.files[0])
  }

  const onSubmitBabyFace = async (data, e) => {
    e.preventDefault()
    if (babyNewFace) {
      const formData = new FormData()

      formData.append('file', babyNewFace)

      try {
        const response = await axios.patch(
          `https://api.mybebe.net/api/v1/diary/baby/${babyId}/face`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        alert('사진 업로드 성공!')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onSubmitBaby = async (data) => {
    try {
      const response = await loggedApi.put(
        `/baby/${babyId}`,
        {
          ...data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      )
      if (response.status === 200) {
        alert('수정이 완료되었습니다.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="rounded-2xl bg-yellow-50 py-6 ">
      <h1 className="text-orange-300">baby</h1>
      <form
        className="flex flex-col items-center py-2"
        onSubmit={handleSubmit(onSubmitBabyFace)}
      >
        {babyNewFace ? (
          <img
            className="w-36 h-36 my-2 object-contain "
            src={URL.createObjectURL(babyNewFace)}
            alt="babyNewFace"
          />
        ) : (
          <img
            className="w-36 h-36 my-2 object-contain"
            src={babyFace ? babyFace : basic}
            alt="babyFace"
          />
        )}
        <input
          className="bg-orange-200 mt-8 w-2/3 p-1"
          type="file"
          accept="image/*"
          onChange={handleBabyFaceChange}
        />
        <button className="mt-3 mb-2">사진 올리기</button>
      </form>

      <form
        className="flex flex-col items-start gap-8  py-2"
        onSubmit={handleSubmit(onSubmitBaby)}
      >
        <div className="ml-16">
          <span className="text-gray-500">태명 (이름) : </span>
          <input
            className="bg-yellow-50 text-orange-300 border-none pl-2 "
            {...register('name', {
              required: '이름은 필수 입력 사항입니다.',
            })}
            type="text"
            defaultValue={babyName}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex ml-16 items-center">
          <p className="text-gray-500 text-xl">gender:</p>
          <select
            className="bg-yellow-50 text-orange-300 border-none pl-2 "
            {...register('gender', {
              required: '성별은 필수 입력 사항입니다.',
            })}
          >
            <option value="">Select gender</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div className="ml-16">
          <span className="text-gray-500">예정일 :</span>
          <input
            className="bg-yellow-50 text-orange-300 border-none pl-2"
            {...register('expectDate', {
              required: '예정일은 필수 입력 사항입니다.',
            })}
            type="date"
            defaultValue={expectDate}
          />
          {errors.expectDate && <p>{errors.expectDate.message}</p>}
        </div>
        <button className="mt-2">수정하기</button>
      </form>
    </div>
  )
}
